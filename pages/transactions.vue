<script setup>
const results = ref([])
const pagination = ref([])
const page = ref(1)

const fetchTransactions = async () => {
	const data = await $fetch('/api/token/transactions', {
		method: 'get',
		params: {
			page: page.value
		}
	})

	results.value = data.result
	pagination.value = data.pagination
}

onMounted(async () => {
	await fetchTransactions()
})
</script>

<template>
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<form @submit.prevent="fetchTransactions">
					<div class="field">
						<label class="label">Page</label>
						<div class="control">
							<input type="number" class="input" v-model="page" min="1" :max="pagination.last_page">
						</div>
						<p class="help is-info">
							Current page: {{ pagination.current_page }},
							Last page: {{ pagination.last_page }}
						</p>
					</div>
					<div class="control">
						<input type="submit" class="button is-primary" :value="`Go to page ${page}`">
					</div>
				</form>

				<div class="table-container">
					<table class="table is-hoverable is-fullwidth">
						<thead>
							<tr>
								<th>To</th>
								<th>Status</th>
								<th>Transaction ID</th>
								<th>Amount</th>
								<th>Timestamp</th>
							</tr>
						</thead>
						<tbody>
							<tr v-for="result in results" :key="result">
								<td>{{ result.to }}</td>
								<td>{{ result.status }}</td>
								<td>{{ result.transactionHash }}</td>
								<td>{{ (result.amount / 100).toFixed(2) }} {{ result.token.symbol }}</td>
								<td>{{ new Date(result.timestamp).toLocaleString('en-GB', { timeZone: 'UTC' }) }}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</template>