<template>
	<NavBar />
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container is-flex is-justify-content-center">
				<LoginForm />
			</div>
		</div>
	</div>
</template>

<script setup>
const user = useSupabaseUser()

watch(user, async () => {
	if (user.value) {
		await navigateTo('/')
	}
}, { immediate: true })
</script>