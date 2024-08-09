import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const client = await serverSupabaseClient(event)
	const user = await serverSupabaseUser(event)
	const { page } = getQuery(event)

	const { data: myWallet } = await client
		.from('maschain')
		.select("*")
		.eq('user_id', user.id)
		.single()

	const data = await $fetch(`${config.maschainApi}/api/token/get-token-transaction`, {
		method: 'get',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		params: {
			wallet_address: myWallet.wallet_address,
			contract_address: config.maschainTokenContract,
			filter: 'from',
			page: page
		}
	})

	return data
})
