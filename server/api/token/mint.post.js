import { serverSupabaseClient, serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const client = await serverSupabaseClient(event)
	const user = await serverSupabaseUser(event)

	const { data: myWallet } = await client
		.from('maschain')
		.select("*")
		.eq('user_id', user.id)
		.single()

	const data = await $fetch(`${config.maschainApi}/api/token/mint`, {
		method: 'post',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		body: {
			wallet_address: '0x447B4A2Fe329b37e16ECcAE1909ed394A4984fB4',
			to: myWallet.wallet_address,
			amount: '1000',
			contract_address: config.maschainTokenContract,
			callback_url: `${config.public.siteUrl}/success`
		}
	})

	return data
})
