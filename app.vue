<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
useHead({
	htmlAttrs: {
		class: 'has-navbar-fixed-top'
	}
})
</script>