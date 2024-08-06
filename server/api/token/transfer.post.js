export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const { donateNo, sender, receiver } = await readBody(event)
	const data = await $fetch(`${config.maschainApi}/api/token/token-transfer`, {
		method: 'post',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		body: {
			wallet_address: sender,
			to: receiver,
			amount: `${donateNo}`,
			contract_address: config.maschainTokenContract,
			callback_url: `${config.public.siteUrl}/success`
		}
	})

	return data
})
