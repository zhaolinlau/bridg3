import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const client = await serverSupabaseClient(event)
	const user = await serverSupabaseUser(event)
	const { data: maschain } = await client.from('maschain').select('*').eq('user_id', user.id).single()
	const data = await $fetch(`${config.maschainApi}/api/token/balance`, {
		method: 'post',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		body: {
			wallet_address: maschain.wallet_address,
			contract_address: config.maschainTokenContract
		},
	})

	return data
})
