<script lang="ts">
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import Frame from './Frame.svelte';

	export let data: any;

	console.log(data);
</script>

<Tabs type="container" autoWidth>
	{#each data.frame_list_output as frame}
		<Tab>
			Frame {frame.frame_id}
		</Tab>
	{/each}
	<svelte:fragment slot="content">
		{#each data.frame_list_output as frame}
			<TabContent>
				<Frame {frame} />
			</TabContent>
		{/each}
	</svelte:fragment>
</Tabs>
