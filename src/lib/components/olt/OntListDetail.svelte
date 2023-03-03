<script lang="ts">
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody,
		Tile
	} from 'carbon-components-svelte';
	import { CaretUp, CaretDown, Network_1, InformationSquare } from 'carbon-icons-svelte';
	import { each } from 'svelte/internal';
	export let data: any;
</script>

<br />
<h4>
	<InformationSquare size={20} style="float: right" /> Aditional info
</h4>
<hr />

<StructuredList condensed style="margin-bottom: 1rem">
	<StructuredListBody>
		<StructuredListRow>
			<StructuredListCell>Serial Number:</StructuredListCell>
			<StructuredListCell><strong>{data.serial_number}</strong></StructuredListCell>
			<StructuredListCell>Distance:</StructuredListCell>
			<StructuredListCell><strong>{data.distance}</strong></StructuredListCell>
		</StructuredListRow>
		<StructuredListRow>
			<StructuredListCell>Control Flag:</StructuredListCell>
			<StructuredListCell><strong>{data.control_flag}</strong></StructuredListCell>
			<StructuredListCell>Match State:</StructuredListCell>
			<StructuredListCell><strong>{data.match_state}</strong></StructuredListCell>
		</StructuredListRow>
		<StructuredListRow>
			<StructuredListCell>Protect Side:</StructuredListCell>
			<StructuredListCell><strong>{data.protect_side}</strong></StructuredListCell>
			<StructuredListCell>Last Downcase:</StructuredListCell>
			<StructuredListCell><strong>{data.last_downcase}</strong></StructuredListCell>
		</StructuredListRow>
	</StructuredListBody>
</StructuredList>

<h4>
	<Network_1 size={20} style="float: right" /> Services
</h4>
<hr />

<StructuredList condensed style="margin-bottom: 1rem">
	<StructuredListHead>
		<StructuredListRow head>
			<StructuredListCell head />
			<StructuredListCell head>Index</StructuredListCell>
			<StructuredListCell head>VLAN ID</StructuredListCell>
			<StructuredListCell head>VLAN Attr</StructuredListCell>
			<StructuredListCell head>Port type</StructuredListCell>
			<StructuredListCell head>GEM Port</StructuredListCell>
			<StructuredListCell head>Flow Type</StructuredListCell>
			<StructuredListCell head>Rx</StructuredListCell>
			<StructuredListCell head>Tx</StructuredListCell>
		</StructuredListRow>
	</StructuredListHead>
	<StructuredListBody>
		{#each data.services as service}
			<StructuredListRow>
				<StructuredListCell>
					{#if service.state === 'up'}
						<CaretUp size={24} color="#42be65" />
					{:else}
						<CaretDown size={24} color="red" />
					{/if}
				</StructuredListCell>
				<StructuredListCell>{service.index}</StructuredListCell>
				<StructuredListCell><strong>{service.vlan_id}</strong></StructuredListCell>
				<StructuredListCell>{service.vlan_attr}</StructuredListCell>
				<StructuredListCell>{service.port_type}</StructuredListCell>
				<StructuredListCell>{service.gem_port}</StructuredListCell>
				<StructuredListCell>{service.flow_type}</StructuredListCell>
				<StructuredListCell>{service.rx}</StructuredListCell>
				<StructuredListCell>{service.tx}</StructuredListCell>
			</StructuredListRow>
		{/each}
	</StructuredListBody>
</StructuredList>
