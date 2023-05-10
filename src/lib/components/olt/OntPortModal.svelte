<script lang="ts">
	import { loadOntPort } from '$lib/scripts/olt/OntPortModal';
	import { Modal, StructuredListSkeleton, TabsSkeleton } from 'carbon-components-svelte';
	import OntPortDetails from './OntPortDetails.svelte';

	export let ont: any;
	export let open: boolean;

	$: ports = ont ? loadOntPort(ont) : null;
</script>

{#if ont}
	<Modal
		bind:open
		size="lg"
		passiveModal
		modalLabel="ONT: {ont.id} {ont.description}"
		modalHeading="ONT Local Ports"
		on:open
		on:close
	>
		{#await ports}
		<TabsSkeleton type="container" count={3} />
			<StructuredListSkeleton rows={3} />
		{:then ports}
			<OntPortDetails {ports} />
        {:catch error}
            Error loading ONT ports:
            <p>{error.message}</p>
		{/await}
	</Modal>
{/if}
