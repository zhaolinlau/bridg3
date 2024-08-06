<template>
	<div class="columns box is-multiline">
		<div class="column is-12">
			<p class="title has-text-centered">
				Login
			</p>
		</div>
		<div class="column is-12">
			<div class="buttons is-centered">
				<button class="button is-fullwidth" @click="googleLogin">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:google" size="1.2em" />
						</span>
						<span>Google</span>
					</span>
				</button>
				<button class="button is-link is-fullwidth" @click="facebookLogin">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:facebook" size="1.2em" />
						</span>
						<span>
							Facebook
						</span>
					</span>
				</button>
				<button class="button is-dark is-fullwidth" @click="githubLogin">
					<span class="icon-text">
						<span class="icon">
							<Icon name="mdi:github" size="1.2em" />
						</span>
						<span>
							GitHub
						</span>
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
			redirectTo: `${config.public.siteUrl}/confirm`
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
			redirectTo: `${config.public.siteUrl}/confirm`
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
			redirectTo: `${config.public.siteUrl}/confirm`
		}
	})

	if (error) {
		console.error(error)
	}
}
</script>
