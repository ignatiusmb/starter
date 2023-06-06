<script>
	import '@ignatiusmb/styles/core.css';

	import { page, updated } from '$app/stores';
</script>

<svelte:head>
	<title>{$page.data.meta?.title || `Error ${$page.status}`} • %SITE_NAME%</title>
	<meta name="author" content="%AUTHOR_NAME%" />

	{#if $page.data.meta?.description}
		<meta name="description" content={$page.data.meta.description} />
	{/if}

	<meta property="og:site_name" content="%SITE_NAME%" />
	<meta property="og:locale" content="en_ID" />

	{#if $page.data.meta?.og}
		{@const { title, url, description } = $page.data.meta.og}
		<meta property="og:title" content={title} />
		<meta property="og:type" content="article" />
		{#if url}
			<meta property="og:url" content={url} />
		{/if}
		{#if description}
			<meta property="og:description" content={description} />
		{/if}
	{/if}
</svelte:head>

<main data-sveltekit-reload={$updated || 'off'}>
	<slot />
</main>
