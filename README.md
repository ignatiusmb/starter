# Application Starter Template

An opinionated and preconfigured template for starting a new app with minimal but enough dependencies to get started for a project of any size, with all the best features and defaults:

-   [pnpm](https://pnpm.io/) as the dependency management
-   [Prettier](https://prettier.io/) as the opinionated code formatter
    -   [mauss](https://github.com/alchemauss/mauss) as the prettier config opinion
-   [TypeScript](https://www.typescriptlang.org/) as the static type checker using [svelte-check](https://github.com/sveltejs/language-tools/tree/master/packages/svelte-check)
    -   [mauss](https://github.com/alchemauss/mauss) as the tsconfig and type-safe SDK
-   [SvelteKit](https://kit.svelte.dev/) as the fullstack framework of choice
    -   [@ignatiusmb/styles](https://github.com/ignatiusmb/styles) as the CSS resets
    -   [syv](https://github.com/ignatiusmb/syv) as the Svelte complementary library
    -   [Vite](https://vitejs.dev/) as both the dev server and bundler
    -   [Vercel](https://vercel.com/) as the deployment platform ([adapter](https://kit.svelte.dev/docs/adapter-vercel))

Create anything from a static blog with markdown files pre-rendered at build time to a fullstack serverless app running on the edge with a database and authentication.

Get started instantly with:

```bash
pnpm install

pnpm dev
```

All that's left is to replace the `%...%` values in the `src/routes/+layout.svelte` file with your own.

---

<h3 align="center"><pre>Starter | <a href="LICENSE">MIT License</a></pre></h3>
