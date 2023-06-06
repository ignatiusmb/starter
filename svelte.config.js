import adapter from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: [vitePreprocess()],

	kit: {
		adapter: adapter(),

		typescript: {
			config: (settings) => ({ ...settings, extends: 'mauss/tsconfig.json' }),
		},

		version: {
			pollInterval: 1000 * 60 * 30, // 30 minutes
		},
	},

	vitePlugin: {
		inspector: true,
	},
};

export default config;
