<template>
	<div class="hero is-fullheight">
		<div class="hero-body">
			<div class="container">
				<p class="title has-text-centered">Redirecting...</p>
			</div>
		</div>
	</div>
</template>

<script setup>
const user = useSupabaseUser()

watch(user, async () => {
	if (user.value) {
		await navigateTo('/')
	} else {
		await navigateTo('/home')
	}
}, { immediate: true })
</script>