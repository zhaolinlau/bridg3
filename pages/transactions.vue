<script setup>
const page = ref(1)

const fetchTransactions = async () => {
	const data = await $fetch('/api/token/transactions', {
		method: 'get',
		params: {
			page: page.value
		}
	})

	await refreshTransactions()
	transactions.value = data
}

const { data: transactions, status: transactionsStatus, refresh: refreshTransactions } = await useFetch('/api/token/transactions', {
	method: 'get',
})
</script>

<template>
	<div class="hero is-fullheight-with-navbar">
		<div class="hero-body">
			<div class="container">
				<form @change="fetchTransactions">
					<div class="field">
						<label class="label">Current Page</label>
						<div class="control">
							<div class="select">
								<select v-model="page">
									<template v-for="pageNo in transactions.pagination.last_page">
										<option :value="pageNo" :selected="pageNo == transactions.pagination.current_page ? true : false">
											{{ pageNo }}
										</option>
									</template>
								</select>
							</div>
						</div>
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
							<tr v-for="result in transactions.result" :key="result"
								:class="transactionsStatus == 'pending' ? 'is-skeleton' : ''">
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