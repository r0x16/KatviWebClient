<script lang="ts">
	import { Tag, Accordion, Grid, Row, Column, DataTableSkeleton, SkeletonText } from 'carbon-components-svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import SlotsList from './SlotsList.svelte';
	import OntList from './OntList.svelte';

	export let frame: any;

	const promSlots = (async () => {
		const slots = await fetch(`${PUBLIC_API_URL}/olt/frame/${frame.frame_id}/slots`);
		const data = await slots.json();

		if (slots.ok) {
			return data;
		} else {
			throw new Error(data.message);
		}
	})();

	const promOnts = (async () => {
		const ont = await fetch(`${PUBLIC_API_URL}/olt/frame/${frame.frame_id}/onts`);
		const data = await ont.json();

		if (ont.ok) {
			return data;
		} else {
			throw new Error(data.message);
		}
	})();
</script>

<p>
	{#if frame.frame_state === 'Normal'}
		<Tag type="green">online</Tag>
	{:else}
		<Tag type="red">{frame.frame_state}</Tag>
	{/if}
	model: <strong>{frame.frame_type}</strong>
</p>
<br />
<Grid condensed fullWidth>
	<Row>
		<Column sm={12} md={2} lg={5}>
			{#await promSlots}
				<br>
				<SkeletonText heading />
				<br>
				<Accordion skeleton count={3} />
			{:then data}
				<SlotsList {data} />
			{:catch error}
				<div>{error.message}</div>
			{/await}
		</Column>

		<Column sm={12} md={6} lg={11}>
			{#await promOnts}
				<br>
				<SkeletonText heading />
				<br>
				<DataTableSkeleton />
			{:then onts}
				<OntList {onts} />
			{:catch error}
				<div>{error.message}</div>
			{/await}
		</Column>
	</Row>
</Grid>
