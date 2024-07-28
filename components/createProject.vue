<template>
	<div class="navbar-item" v-if="user && npo == true">
		<button class="button is-primary">
			<strong>Create a Project</strong>
		</button>
	</div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()
const npo = ref('false')

const { data: maschainLength } = await client.from('maschain').select('*').eq('user_id', user.value.id)
if (maschainLength.length != 0) {
	const { data: maschain } = await client.from('maschain').select('*').eq('user_id', user.value.id).single()
	npo.value = maschain.npo
}

</script>