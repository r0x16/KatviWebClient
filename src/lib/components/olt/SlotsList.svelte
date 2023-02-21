<script lang="ts">
	import { Tag, Column, DataTableSkeleton } from 'carbon-components-svelte';
	import SlotsListMenu from './SlotsListMenu.svelte';
	export let data: any;
</script>

{#if data.total_board_count === 0}
	<Column>
		<Tag type="red">no slots</Tag>
	</Column>
{:else}
	<Column sm={12} md={3}>
		<SlotsListMenu {data} />
	</Column>

	<Column sm={12} md={5}>
		<DataTableSkeleton />
	</Column>
{/if}