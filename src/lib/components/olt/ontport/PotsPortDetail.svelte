<script lang="ts">
	import {
		StructuredList,
		StructuredListHead,
		StructuredListRow,
		StructuredListCell,
		StructuredListBody
	} from 'carbon-components-svelte';

	export let ports: any;
</script>

<StructuredList condensed>
	<StructuredListHead>
		<StructuredListRow head>
			<StructuredListCell head>Id</StructuredListCell>
			<StructuredListCell head>Physical State</StructuredListCell>
			<StructuredListCell head>Admin State</StructuredListCell>
			<StructuredListCell head>Hook State</StructuredListCell>
			<StructuredListCell head>Session Type</StructuredListCell>
			<StructuredListCell head>Service State</StructuredListCell>
			<StructuredListCell head>Call State</StructuredListCell>
			<StructuredListCell head>Service Codec</StructuredListCell>
		</StructuredListRow>
	</StructuredListHead>
	<StructuredListBody>
        {#each ports as port}
		<StructuredListRow>
			<StructuredListCell>{port.id}</StructuredListCell>
			<StructuredListCell>{port.physical_state}</StructuredListCell>
			<StructuredListCell>{port.admin_state}</StructuredListCell>
			<StructuredListCell>{port.hook_state}</StructuredListCell>
			<StructuredListCell>{port.session_type}</StructuredListCell>
			<StructuredListCell>{port.service_state}</StructuredListCell>
			<StructuredListCell>{port.call_state}</StructuredListCell>
			<StructuredListCell>{port.service_codec}</StructuredListCell>
		</StructuredListRow>
        {/each}
	</StructuredListBody>
</StructuredList>
