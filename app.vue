<template>
	<NuxtRouteAnnouncer />
	<NuxtLoadingIndicator />
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>

<script setup>
useHead({
	htmlAttrs:{
		class: 'theme-light has-navbar-fixed-top'
	}
})
</script>