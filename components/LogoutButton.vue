<template>
	<button class="button" @click="logout">
		Logout
	</button>
</template>

<script setup>
const client = useSupabaseClient()

const logout = async () => {
	const { error } = await client.auth.signOut()

	if (error) {
		console.error(error)
	} else {
		await navigateTo('/confirm')
	}
}
</script>