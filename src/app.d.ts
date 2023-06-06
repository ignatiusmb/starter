// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		interface PageData {
			meta: {
				title: string;
				description?: string;
				og?: {
					title: string;
					url?: string;
					description?: string;
				};
			};
		}
	}
}

export {};
