<script lang="ts">
	import { OverflowMenu, OverflowMenuItem } from 'carbon-components-svelte';
	import { Network_2 } from 'carbon-icons-svelte';
    import { createEventDispatcher } from 'svelte';

    const dispatch = createEventDispatcher();

    export let ont: any;
</script>

<OverflowMenu flipped size="sm">
	<OverflowMenuItem on:click={ () => dispatch('ports', { ont }) }>
		<Network_2 size={20} />
        <span class="kvMenuItem">
            Ports
        </span>
	</OverflowMenuItem>
</OverflowMenu>

<!-- css styles for the component -->
<style type="text/css">
    .kvMenuItem {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        font-size: 1rem;
        padding-left: 1rem;
    }
</style>