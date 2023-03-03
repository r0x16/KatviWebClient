<script>
	import 'carbon-components-svelte/css/all.css';
	import Header from '$lib/components/Header.svelte';
	import { Content, Theme } from 'carbon-components-svelte';
</script>

<Header />

<Content>
	<div style="float:right">
		<Theme
			render="toggle"
			toggle={{
				themes: ['g10', 'g80'],
				labelA: '🌞',
				labelB: '🌙',
				hideLabel: true,
				size: 'sm'
			}}
			persist persistKey="__katvi-theme"
		/>
	</div>
	<slot />
</Content>
