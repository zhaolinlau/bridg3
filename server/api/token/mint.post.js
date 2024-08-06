export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const data = await $fetch(`${config.maschainApi}/api/token/mint`, {
		method: 'post',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		body: {
			wallet_address: '0x447B4A2Fe329b37e16ECcAE1909ed394A4984fB4',
			to: '0xb0768DA0234438C146B0665ea9f379237C2E6262',
			amount: '1000',
			contract_address: config.maschainTokenContract,
			callback_url: `${config.public.siteUrl}/success`
		}
	})

	return data
})
