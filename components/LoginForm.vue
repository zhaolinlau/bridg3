<template>
	<form class="box">
		<div class="field">
			<div class="control">
				<div class="buttons">
					<button class="button" @click="googleLogin">
						Login with Google
					</button>
					<button class="button" @click="facebookLogin">
						Login with Facebook
					</button>
					<button class="button" @click="githubLogin">
						Login with GitHub
					</button>
				</div>
			</div>
		</div>
	</form>
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
