<template>
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<div class="columns is-multiline">
					{{ transactions }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const { data: transactions } = await useFetch('/api/token/transactions', {
	method: 'get'
})
</script>