<script lang="ts">
	import { Tag, Accordion, Grid, Row, Column, DataTableSkeleton } from 'carbon-components-svelte';
	import { PUBLIC_API_URL } from '$env/static/public';
	import SlotsList from './SlotsList.svelte';

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
</script>

<p>
	{#if frame.frame_state === 'Normal'}
		<Tag type="green">online</Tag>
	{:else}
		<Tag type="red">{frame.frame_state}</Tag>
	{/if}
	model: <strong>{frame.frame_type}</strong>
</p>
<br>
<Grid condensed>
	<Row>
		{#await promSlots}
			<Column sm={12} md={2}>
				<Accordion skeleton count={3} />
			</Column>

			<Column sm={12} md={6}>
				<DataTableSkeleton />
			</Column>
		{:then data}
			<SlotsList {data} />
		{:catch error}
			<div>{error.message}</div>
		{/await}
	</Row>
</Grid>
