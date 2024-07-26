<template>
	<div class="hero is-fullhight">
		<div class="hero-body">
			<div class="container">
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