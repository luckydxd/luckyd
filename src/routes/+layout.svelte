<script>
	import './layout.css';
	import '../app.css';
	import favicon from '$lib/assets/L-metal.png';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children()}
