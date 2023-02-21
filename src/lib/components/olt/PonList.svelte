<script lang="ts">
	import { DataTable } from 'carbon-components-svelte';
	import CheckmarkFilled from 'carbon-icons-svelte/lib/CheckmarkFilled.svelte';
	import ErrorFilled from 'carbon-icons-svelte/lib/ErrorFilled.svelte';
	import PonListDetail from './PonListDetail.svelte';

	export let data: any;
    export let frame: any;
    export let board: any;
</script>

<DataTable
	size="compact"
	batchExpansion
	headers={[
		{ key: 'port_status', value: '' },
		{ key: 'id', value: 'Port' },
		{ key: 'ont_total', value: 'ONTs' },
		{ key: 'ont_online', value: 'Online' }
	]}
	rows={data}
>
	<svelte:fragment slot="cell" let:row let:cell>
		{#if cell.key === 'port_status'}
			{#if cell.value === 'Online'}
				<CheckmarkFilled color="green" size={16} />
			{:else}
				<ErrorFilled color="red" size={16} />
			{/if}
        {:else if cell.key === 'id'}
            {frame}/{board.slot_id}/{cell.value}
		{:else}
			{cell.value}
		{/if}
	</svelte:fragment>

	<svelte:fragment slot="expanded-row" let:row>
		<PonListDetail data={row} />
	</svelte:fragment>
</DataTable>
