<template>
	<div class="navbar-item" v-if="user && npo == true">
		<button class="button is-primary" @click="visible = true">
			<strong>Create a Project</strong>
		</button>
	</div>

	<Dialog v-model:visible="visible" modal header="Create Project" :style="{ width: '25rem' }">
		<form @submit.prevent="createProject">
			<div class="field">
				<label for="" class="label">Project Title</label>
				<div class="control">
					<input type="text" class="input" v-model="title">
				</div>
			</div>
			<div class="field">
				<label for="" class="label">Project Description</label>
				<div class="control">
					<textarea class="textarea" v-model="desc"></textarea>
				</div>
			</div>
			<div class="flex justify-end gap-2">
				<Button type="submit" unstyled class="button is-primary">Create</Button>
				<Button type="button" unstyled label="Cancel" class="button is-danger" @click="visible = false">Cancel</Button>
			</div>
		</form>
	</Dialog>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()
const npo = ref('false')
const visible = ref(false)
const title = ref('')
const desc = ref('')

const createProject = async () => {
	const { error } = await client
		.from('project')
		.insert([
			{ title: title.value, content: desc.value },
		])
		.select()

	if (error) {
		console.error(error)
	} else {
		window.alert('Your new project has been created.')
		title.value = ''
		desc.value = ''
	}
}

const { data: maschainLength } = await client.from('maschain').select('*').eq('user_id', user.value.id)
if (maschainLength.length != 0) {
	const { data: maschain } = await client.from('maschain').select('*').eq('user_id', user.value.id).single()
	npo.value = maschain.npo
}
</script>