<template>
	<NavBar />
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline has-text-centered">
					<div class="column is-12">
						<p class="title">
							Hi {{ user.email }} <br> Welcome to FundForNeeds!
						</p>
						<p class="title">
							You have {{ balance.result }} tokens
						</p>
						<div class="buttons is-centered">
							<button class="button" @click="refreshBalance">Refresh Balance</button>
							<button class="button" @click="mintCert">Mint Certificate</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig()
const user = useSupabaseUser()
const client = useSupabaseClient()

const createUserWallet = async () => {
	const data = await $fetch(`${config.public.api}/api/wallet/create-user`, {
		method: 'post',
		headers: {
			client_id: config.public.clientID,
			client_secret: config.public.clientSecret,
			'content-type': 'application/json'
		},
		body: {
			name: user.value.email,
			email: user.value.email,
		}
	})

	await client
		.from('maschain')
		.insert([
			{ wallet_address: data.result.wallet.wallet_address },
		])
		.select()
}
const { data: maschain } = await client.from('maschain').select('*').eq('user_id', user.value.id).single()

const { data: maschainLength } = await client.from('maschain').select('*').eq('user_id', user.value.id)

if (maschainLength.length == 0) {
	await createUserWallet()
}

const mintCert = async () => {
	try {
		const data = await $fetch(`${config.public.api}/api/certificate/mint-certificate`, {
			method: 'post',
			headers: {
				client_id: config.public.clientID,
				client_secret: config.public.clientSecret,
				body: 'form-data'
			},
			body: {
				wallet_address: maschain.wallet_address,
				to: '0xD6C0868b79A0Fcb503daC32cF0Aa1F0D0211bFe3',
				contract_address: '0x5DFE5cbC5E56E7a31F81475B5F7DC340ac8eB47A',
				name: 'asd',
				description: 'gdfesger',
				callback_url: `${config.public.siteURL}/success`
			}
		})
		console.log(data)
	} catch (error) {
		console.error(error)
	}
}

const { data: balance, refresh: refreshBalance } = await useFetch(`${config.public.api}/api/token/balance`, {
	method: 'post',
	headers: {
		client_id: config.public.clientID,
		client_secret: config.public.clientSecret,
		'content-type': 'application/json'
	},
	body: {
		wallet_address: maschain.wallet_address,
		contract_address: '0x89e63E4b9fB4f99Ca3641185e3947fA658Ce56f0'
	},
})
</script>