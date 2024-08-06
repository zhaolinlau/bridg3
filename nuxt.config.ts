// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['bulma/css/bulma.min.css'],
	modules: ["@nuxtjs/supabase", "@nuxt/icon", "@nuxt/image"],
	runtimeConfig: {
		maschainClientId: process.env.NUXT_MASCHAIN_CLIENT_ID,
		maschainClientSecret: process.env.NUXT_MASCHAIN_CLIENT_SECRET,
		maschainApi: process.env.NUXT_MASCHAIN_API,
		maschainTokenContract: process.env.NUXT_MASCHAIN_TOKEN_CONTRACT,
		maschainCertificateContract: process.env.NUXT_MASCHAIN_CERTIFICATE_CONTRACT,
		public: {
			siteUrl: process.env.NUXT_PUBLIC_SITE_URL,
		},
	},
	supabase: {
		redirectOptions: {
			login: '/login',
			callback: '/confirm',
			include: undefined,
			exclude: ['/home', '/project', '/donate'],
			cookieRedirect: false,
		}
	}
})