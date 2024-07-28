<template>
	<NavBar />
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="columns is-multiline is-centered is-vcentered mx-auto">
				<div class="column is-6">
					<Card style="width: 25rem; overflow: hidden">
						<template #header>
							<NuxtImg alt="user header" src="https://bulma.io/assets/images/placeholders/1280x960.png" />
						</template>
						<template #title>{{ project.title }}</template>
						<template #subtitle>Created on {{ project.created_at }}</template>
						<template #content>
							<p>
								{{ project.content }}
							</p>
						</template>
						<template #footer>
							<div class="flex gap-4 mt-1">
								<Button label="Back" class="w-full button is-link" unstyled @click="navigateTo('/home')" />
							</div>
						</template>
					</Card>
				</div>

				<div class="column is-6">
					<Card style="width: 25rem; overflow: hidden">
						<template #title>Donation Form</template>
						<template #content>
							<form @submit.prevent="transferToken">
								<div class="field">
									<label for="" class="label">
										The amount of token you want to donate:
									</label>
									<div class="control">
										<input type="number" class="input" v-model="donateNo">
									</div>
								</div>
								<div class="field">
									<div class="control">
										<Button unstyled label="Donate" type="submit" class="button is-primary w-full" />
									</div>
								</div>
							</form>
						</template>
					</Card>
				</div>
			</div>
		</div>
	</div>

</template>

<script setup>
const route = useRoute()
const client = useSupabaseClient()
const donateNo = ref('')
const user = useSupabaseUser()
const config = useRuntimeConfig()

let { data: project } = await client
	.from('project')
	.select("*")
	.eq('id', route.params.id)
	.single()

let { data: maschain } = await client
	.from('maschain')
	.select("*")
	.eq('user_id', project.user_id)
	.single()

let { data: myWallet } = await client
	.from('maschain')
	.select("*")
	.eq('user_id', user.value.id)
	.single()

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
				wallet_address: myWallet.wallet_address,
				to: maschain.wallet_address,
				amount: donateNo.value,
				contract_address: '0x89e63E4b9fB4f99Ca3641185e3947fA658Ce56f0',
				callback_url: `${config.public.siteURL}/success`
			}
		})
		console.log(data)
		alert('You have donated to the project.')
	} catch (error) {
		console.error(error)
	}
}
</script>