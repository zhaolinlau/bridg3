// https://nuxt.com/docs/api/configuration/nuxt-config
import { definePreset } from '@primevue/themes';
import Aura from '@primevue/themes/aura';

export default defineNuxtConfig({
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	css: ['assets/bulma.scss', '~/assets/css/main.css'],
	modules: ["@nuxtjs/supabase", "@nuxt/icon", "@nuxt/image", '@primevue/nuxt-module'],
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
	primevue: {
		options: {
			theme: {
				options: {
					darkModeSelector: 'light'
				},
				preset: definePreset(Aura, {
					semantic: {
						primary: {
							50: '{emerald.50}',
							100: '{emerald.100}',
							200: '{emerald.200}',
							300: '{emerald.300}',
							400: '{emerald.400}',
							500: '{emerald.500}',
							600: '{emerald.600}',
							700: '{emerald.700}',
							800: '{emerald.800}',
							900: '{emerald.900}',
							950: '{emerald.950}'
						}
					}
				})
			}
		}
	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	}
})