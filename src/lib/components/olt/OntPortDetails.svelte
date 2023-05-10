<script lang="ts">
	import { Tabs, Tab, TabContent } from 'carbon-components-svelte';
	import CatvPortDetail from './ontport/CatvPortDetail.svelte';
	import EthPortDetail from './ontport/EthPortDetail.svelte';
	import PotsPortDetail from './ontport/PotsPortDetail.svelte';

	export let ports: any;
</script>

<Tabs>
	<Tab label="CATV" />
	<Tab label="ETHERNET" />
	<Tab label="POTS" />
	<svelte:fragment slot="content">
		<TabContent><CatvPortDetail ports={ports.catv_ports} /></TabContent>
		<TabContent><EthPortDetail ports={ports.eth_ports} /></TabContent>
		<TabContent><PotsPortDetail ports={ports.pots_ports} /></TabContent>
	</svelte:fragment>
</Tabs>



