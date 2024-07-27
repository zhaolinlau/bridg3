<template>
	<div class="hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline has-text-centered">
					<div class="column is-12">
						<p class="title">
							Hi {{ user.email }} <br> Welcome to FundForNeeds!
						</p>
					</div>
					<div class="buttons">
						<button class="button" @click="createUserWallet">create user wallet</button>
						<button class="button" @click="generateToken">Generate Token</button>
						<p class="title">
							{{ balance.result }}
						</p>
						<button class="button" @click="refreshBalance">Refresh Balance</button>
						<button class="button" @click="transferToken">Transfer Token</button>
						<input type="file" @change="uploadFile">
						<button class="button" @click="mintCert">Mint Certificate</button>
					</div>
					<div class="column is-12">
						<LogoutButton />
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig()
const user = useSupabaseUser()

const files = ref()

const uploadFile = async (evt) => {
	files.value = evt.target.files
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
				wallet_address: '0xeC986877959353dD458Db433Ef2F7c12d49ae52b',
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

const transferToken = async () => {
	try {
		const data = await $fetch(`${config.public.api}/api/token/token-transfer`, {
			method: 'post',
			headers: {
				client_id: config.public.clientID,
				client_secret: config.public.clientSecret,
				'content-type': 'application/json'
			},
			body: {
				wallet_address: '0xDE8E9C222e32987216F9b20A71ce61935C32Fb6d',
				to: '0x21D413b91C137280567fb37FC98662C1fc00Fa2A',
				amount: '1000',
				contract_address: '0x89e63E4b9fB4f99Ca3641185e3947fA658Ce56f0',
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
		wallet_address: '0xDE8E9C222e32987216F9b20A71ce61935C32Fb6d',
		contract_address: '0x89e63E4b9fB4f99Ca3641185e3947fA658Ce56f0'
	},
})

const generateToken = async () => {
	try {
		const data = await $fetch(`${config.public.api}/api/token/mint`, {
			method: 'post',
			headers: {
				client_id: config.public.clientID,
				client_secret: config.public.clientSecret,
				'content-type': 'application/json'
			},
			body: {
				wallet_address: '0xDE8E9C222e32987216F9b20A71ce61935C32Fb6d',
				to: '0xDE8E9C222e32987216F9b20A71ce61935C32Fb6d',
				amount: '1000',
				contract_address: '0x89e63E4b9fB4f99Ca3641185e3947fA658Ce56f0',
				callback_url: `${config.public.siteURL}/success`
			}
		})
		console.log(data)
	} catch (error) {
		console.error(error)
	}
}

const createUserWallet = async () => {
	const data = await $fetch(`${config.public.api}/api/wallet/create-user`, {
		method: 'post',
		headers: {
			client_id: config.public.clientID,
			client_secret: config.public.clientSecret,
			'content-type': 'application/json'
		},
		body: {
			name: 'asd@gmail.com',
			email: 'asd@gmail.com',
		}
	})

	console.log(data)
}
</script>