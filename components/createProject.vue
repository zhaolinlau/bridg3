<template>
	<div class="navbar-item" v-if="user && maschain.npo == true">
		<button class="button is-primary" @click="visible = true">
			<strong>Create a Project</strong>
		</button>
	</div>

	<div :class="`modal ${visible ? 'is-active' : ''}`">
		<div class="modal-background"></div>
		<div class="modal-content box">
			<form @submit.prevent="createProject">
				<div class="field">
					<label for="" class="label">Project Title</label>
					<div class="control">
						<input type="text" class="input" v-model="title" required>
					</div>
				</div>
				<div class="field">
					<label for="" class="label">Project Description</label>
					<div class="control">
						<textarea class="textarea" v-model="desc" required></textarea>
					</div>
				</div>
				<div class="field">
					<div class="control">
						<div class="buttons">
							<button type="submit" class="button is-primary">Create</button>
							<button type="button" class="button is-danger" @click="visible = false">Cancel</button>
						</div>
					</div>
				</div>
			</form>
		</div>

		<button class="modal-close is-large" @click="visible = false" aria-label="close"></button>
	</div>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()
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

const { data: maschain } = await client.from('maschain').select('*').eq('user_id', user.value.id).single()
</script>