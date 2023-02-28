<script lang="ts">
	import { PUBLIC_API_URL } from '$env/static/public';
	import {
		TabsSkeleton,
		Grid,
		Row,
		Column,
		SkeletonText,
		Accordion,
		DataTableSkeleton
	} from 'carbon-components-svelte';

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

<Grid>
	<Row>
		<Column>
			{#await promFrames}
				<TabsSkeleton type="container" count={3} />
				<br />
				<SkeletonText heading />
				<br />
				<Grid condensed fullWidth>
					<Row>
						<Column sm={12} md={2}>
							<br />
							<SkeletonText heading />
							<br />
							<Accordion skeleton count={3} />
						</Column>

						<Column sm={12} md={6}>
							<br />
							<SkeletonText heading />
							<br />
							<DataTableSkeleton />
						</Column>
					</Row>
				</Grid>
			{:then data}
				<FrameList {data} />
			{:catch error}
				<div>{error.message}</div>
			{/await}
		</Column>
	</Row>
</Grid>
