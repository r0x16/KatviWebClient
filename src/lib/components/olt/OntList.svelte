<script lang="ts">
	import {
		Tile,
		DataTable,
		Toolbar,
		ToolbarContent,
		ToolbarSearch,
		Pagination
	} from 'carbon-components-svelte';
	import { ImageService, PlayFilledAlt, StopFilledAlt } from 'carbon-icons-svelte';

	export let onts: any;

	let pageSize = 17;
	let page = 1;
	let filteredRowIds: any[] = [];

	$: console.log('filteredRowIds', filteredRowIds);
</script>

<Tile light>
	<h4><ImageService size={24} /> ONTs</h4>
</Tile>
<br />
<DataTable
	expandable
	headers={[
		{ key: 'pon', value: 'PON' },
		{ key: 'ont_id', value: 'ONU' },
		{ key: 'description', value: 'Description' },
		{ key: 'type', value: 'Type' },
		{ key: 'distance', value: 'Distance' },
		{ key: 'serial_number', value: 'S/N' },
		{ key: 'rx_power', value: 'RX' },
		{ key: 'tx_power', value: 'TX' },
		{ key: 'run_state', value: 'Status' },
		{ key: 'config_state', value: 'Config State' }
	]}
	rows={onts}
	{pageSize}
	{page}
>
	<Toolbar>
		<ToolbarContent>
			<ToolbarSearch persistent shouldFilterRows bind:filteredRowIds />
		</ToolbarContent>
	</Toolbar>

	<svelte:fragment slot="cell" let:row let:cell>
		{#if cell.key === 'run_state'}
			{#if cell.value === 'online'}
				<PlayFilledAlt color="#42be65" size={16} />
			{:else}
				<StopFilledAlt color="red" size={16} />
			{/if}
		{:else if cell.key === 'description'}
			<strong>
				{cell.value}
			</strong>
		{:else if cell.key === 'serial_number'}
            <i>{cell.value}</i>
        {:else}
			{cell.value}
		{/if}
	</svelte:fragment>
</DataTable>

<Pagination bind:pageSize bind:page totalItems={filteredRowIds.length} pageSizeInputDisabled />
