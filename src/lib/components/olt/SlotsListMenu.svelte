<script lang="ts">
	import { Accordion, AccordionItem, Tag, Tile } from 'carbon-components-svelte';
	import ContainerRegistry from "carbon-icons-svelte/lib/ContainerRegistry.svelte";
	import PonList from './PonList.svelte';
	export let data: any;
	export let frame: number = 0;
</script>

<Tile light>
	<h4><ContainerRegistry /> Slots (Boards)</h4>
</Tile>
<br />
<Accordion align="start" size="sm">
	{#each data.board_list_output as board}
		<AccordionItem open={board.has_pon} disabled={!board.has_pon}>
			<svelte:fragment slot="title">
				<h4>{board.board_name}</h4>
				<div>
					<Tag type="outline">(slot) {frame}/{board.slot_id}</Tag>
					{#if board.board_status === 'Normal' || board.board_status === 'Active_normal'}
						<Tag type="green">{board.board_status}</Tag>
					{:else}
						<Tag type="red">{board.board_status}</Tag>
					{/if}
				</div>
			</svelte:fragment>
			<PonList data={board.pon_ports} {frame} {board} />
		</AccordionItem>
	{/each}
</Accordion>
