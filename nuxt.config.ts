// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['bulma/css/bulma.min.css', '~/assets/css/main.css'],
	modules: ["@nuxtjs/supabase", "@nuxt/icon", "@nuxt/image"],
	runtimeConfig: {
		public: {
			siteURL: process.env.NUXT_PUBLIC_SITE_URL,
			clientID: process.env.MASCHAIN_CLIENT_ID,
			clientSecret: process.env.MASCHAIN_CLIENT_SECRET,
			api: process.env.MASCHAIN_API,
			token: process.env.MASCHAIN_TOKEN_CONTRACT
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
	},
	postcss: {
		plugins: {
		  tailwindcss: {},
		  autoprefixer: {},
		},
	}
})