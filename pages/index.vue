<template>
	<form @submit.prevent="getWallet">
		client id:
		<input type="text" v-model="client_id">
		<br><br>
		client secret:
		<input type="text" v-model="client_secret">
		<br><br>
		instance:
		<select v-model="instance">
			<option value="https://service-testnet.maschain.com">Testnet</option>
			<option value="https://service.maschain.com">Mainnet</option>
		</select>
		<br><br>
		<button type="submit">Fetch Maschain Organisation Wallet</button>
	</form>
	<br>
	result: <br>
	{{ wallet_data }}
</template>

<script setup>
const client_id = ref('');
const client_secret = ref('');
const instance = ref('');
const wallet_data = ref([null]);

const getWallet = async () => {
	try {
		const data = await $fetch(`${instance.value}/api/wallet/wallet?type=1`, {
			method: 'GET',
			headers: {
				'client_id': client_id.value,
				'client_secret': client_secret.value,
				'content-type': 'application/json'
			}
		});

		wallet_data.value = data;
		console.log(data);

	} catch (error) {
		wallet_data.value = error;
		console.error(error);
	}
}
</script>