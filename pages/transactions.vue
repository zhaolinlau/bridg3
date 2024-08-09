<template>
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
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
								<td>{{ (result.amount/100).toFixed(2) }} {{ result.token.symbol }}</td>
								<td>{{ new Date(result.timestamp).toLocaleString('en-GB', { timeZone: 'UTC' }) }}</td>
							</tr>
						</tbody>
					</table>

					{{ paginations }}
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
const results = ref(null)
const paginations = ref(null)

const { data: transactions } = await useFetch('/api/token/transactions', {
	method: 'get'
})

results.value = transactions.value.result
paginations.value = transactions.value.pagination
</script>