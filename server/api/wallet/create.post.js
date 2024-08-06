import { serverSupabaseUser } from '#supabase/server'

export default defineEventHandler(async (event) => {
	const config = useRuntimeConfig()
	const user = await serverSupabaseUser(event)
	const data = await $fetch(`${config.maschainApi}/api/wallet/create-user`, {
		method: 'post',
		headers: {
			client_id: config.maschainClientId,
			client_secret: config.maschainClientSecret,
			'content-type': 'application/json'
		},
		body: {
			name: user.email,
			email: user.email,
		}
	})

	return data
})
