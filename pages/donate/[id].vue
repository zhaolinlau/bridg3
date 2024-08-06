<template>
	<NavBar />
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="columns is-multiline is-centered is-vcentered mx-auto">
				<div class="column is-6 is-12-touch">
					<div class="card">
						<div class="card-image">
							<figure class="image">
								<NuxtImg alt="user header" src="https://bulma.io/assets/images/placeholders/1280x960.png" />
							</figure>
						</div>
						<div class="media">
							<div class="media-content">
								<p class="title">
									{{ project.title }}
								</p>
								<p class="subtitle">
									Created on {{ new Date(project.created_at).toUTCString() }}
								</p>
							</div>
						</div>
						<div class="card-content">
							<div class="content">
								{{ project.content }}
							</div>
						</div>
						<footer class="card-footer">
							<NuxtLink class="card-footer-item" @click="navigateTo('/home')">Back</NuxtLink>
						</footer>
					</div>
				</div>

				<template v-if="user.id != project.user_id">
					<div class="column is-6 is-12-touch">
						<div class="box">
							<p class="title">Donation Form</p>
							<form @submit.prevent="transferToken">
								<div class="field">
									<label for="" class="label">
										The amount of token you want to donate:
									</label>
									<div class="control">
										<input type="number" class="input" v-model="donateNo" required>
									</div>
								</div>
								<div class="field">
									<div class="control">
										<div class="buttons">
											<button type="submit" class="button is-primary is-fullwidth">Donate</button>
										</div>
									</div>
								</div>
							</form>
						</div>
					</div>
				</template>
			</div>
		</div>
	</div>

</template>

<script setup>
const route = useRoute()
const client = useSupabaseClient()
const donateNo = ref('')
const user = useSupabaseUser()

const { data: project } = await client
	.from('project')
	.select("*")
	.eq('id', route.params.id)
	.single()

const { data: maschain } = await client
	.from('maschain')
	.select("*")
	.eq('user_id', project.user_id)
	.single()

const { data: myWallet } = await client
	.from('maschain')
	.select("*")
	.eq('user_id', user.value.id)
	.single()

const transferToken = async () => {
	try {
		const data = await $fetch('/api/token/transfer', {
			method: 'post',
			body: {
				sender: myWallet.wallet_address,
				receiver: maschain.wallet_address,
				donateNo: donateNo.value,
			}
		})
		alert(`You have donated to the project and the transaction id is ${data.result.transactionHash}`)
	} catch (error) {
		console.error(error)
	}
}
</script>