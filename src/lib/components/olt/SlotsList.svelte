<script lang="ts">
	import { Tag, Column, DataTableSkeleton } from 'carbon-components-svelte';
	import SlotsListMenu from './SlotsListMenu.svelte';
	export let data: any;
</script>

{#if data.total_board_count === 0}
	<Tag type="red">no slots</Tag>
{:else}
	<SlotsListMenu {data} />
{/if}