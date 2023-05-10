<script lang="ts">
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody
	} from 'carbon-components-svelte';
	import { CaretDown, CaretUp } from 'carbon-icons-svelte';

	export let ports: any;
</script>

<StructuredList condensed>
	<StructuredListHead>
		<StructuredListRow head>
			<StructuredListCell head>Link State</StructuredListCell>
			<StructuredListCell head>Id</StructuredListCell>
			<StructuredListCell head>Port Type</StructuredListCell>
			<StructuredListCell head>Tx Power</StructuredListCell>
		</StructuredListRow>
	</StructuredListHead>
	<StructuredListBody>
		{#each ports as port}
			<StructuredListRow>
				<StructuredListCell>
					{#if port.link_state === 'up'}
						<CaretUp size={24} color="#42be65" />
					{:else}
						<CaretDown size={24} color="red" />
					{/if}
				</StructuredListCell>
				<StructuredListCell>{port.id}</StructuredListCell>
				<StructuredListCell>CATV</StructuredListCell>
				<StructuredListCell>{port.tx_power}</StructuredListCell>
			</StructuredListRow>
		{/each}
	</StructuredListBody>
</StructuredList>
