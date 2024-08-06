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
							<button class="button" @click="mintToken">Mint Token</button>
							<button class="button" @click="refreshBalance">Refresh Balance</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const user = useSupabaseUser()
const client = useSupabaseClient()

const mintToken = async () => {
	try {
		await $fetch('/api/token/mint', {
			method: 'post'
		})
	} catch (error) {
		console.error(error)
	}
}


const createUserWallet = async () => {
	const data = await $fetch('/api/wallet/create', {
		method: 'post'
	})
	await client
		.from('maschain')
		.insert([
			{ wallet_address: data.result.wallet.wallet_address },
		])
		.select()
}

const { data: maschainLength } = await client.from('maschain').select('*').eq('user_id', user.value.id)

if (maschainLength.length == 0) {
	await createUserWallet()
}

const { data: balance, refresh: refreshBalance } = await useFetch('/api/token/balance', {
	method: 'post'
})
</script>