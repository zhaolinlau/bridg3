<template>
	<div class="columns box is-multiline">
		<div class="column is-12">
			<p class="title has-text-centered">
				Login
			</p>
		</div>
		<div class="column is-12">
			<div class="buttons is-centered">
				<button class="button is-light" @click="googleLogin">
					<span class="icon">
						<Icon name="mdi:google" size="1.2em" />
					</span>
				</button>
				<button class="button is-link" @click="facebookLogin">
					<span class="icon">
						<Icon name="mdi:facebook" size="1.2em" />
					</span>
				</button>
				<button class="button is-dark" @click="githubLogin">
					<span class="icon">
						<Icon name="mdi:github" size="1.2em" />
					</span>
				</button>
			</div>
		</div>
	</div>
</template>

<script setup>
const config = useRuntimeConfig()
const client = useSupabaseClient()

const googleLogin = async () => {
	const { error } = await client.auth.signInWithOAuth({
		provider: 'google',
		options: {
			redirectTo: `${config.public.siteURL}/confirm`
		}
	})

	if (error) {
		console.error(error)
	}
}

const facebookLogin = async () => {
	const { error } = await client.auth.signInWithOAuth({
		provider: 'facebook',
		options: {
			redirectTo: `${config.public.siteURL}/confirm`
		}
	})

	if (error) {
		console.error(error)
	}
}

const githubLogin = async () => {
	const { error } = await client.auth.signInWithOAuth({
		provider: 'github',
		options: {
			redirectTo: `${config.public.siteURL}/confirm`
		}
	})

	if (error) {
		console.error(error)
	}
}
</script>
