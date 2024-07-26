// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['bulma/css/bulma.min.css'],
	modules: ["@nuxtjs/supabase"],
	runtimeConfig: {
		public: {
			siteURL: process.env.NUXT_PUBLIC_SITE_URL,
		},
	},
})