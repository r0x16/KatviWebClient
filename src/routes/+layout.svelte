<script>
	import 'carbon-components-svelte/css/g90.css';
	import Header from '$lib/components/Header.svelte';
	import { Content } from 'carbon-components-svelte';
</script>

<Header />

<Content>
	<slot />
</Content>
