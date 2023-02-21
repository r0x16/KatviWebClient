<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import { TabsSkeleton, Grid, Row, Column } from 'carbon-components-svelte';

	let promFrames = (async () => {
		const frames = await fetch(`${PUBLIC_API_URL}/olt/frame`);
		const data = await frames.json();

		if (frames.ok) {
			return data;
		} else {
			throw new Error(data.message);
		}
	})();

	import FrameList from '$lib/components/olt/FrameList.svelte';
</script>

<Grid padding>
	<Row>
		<Column> 
			{#await promFrames}
				<TabsSkeleton type="container" count={3} />
			{:then data}
				<FrameList {data} />
			{:catch error}
				<div>{error.message}</div>
			{/await}
		</Column>
	</Row>
</Grid>