<script>
	import {
		Header,
		HeaderUtilities,
		HeaderGlobalAction,
		SkipToContent
	} from 'carbon-components-svelte';
	import Notification from 'carbon-icons-svelte/lib/Notification.svelte';
	import View from 'carbon-icons-svelte/lib/View.svelte';
</script>

<Header company="ThunderForce">
	<svelte:fragment slot="platform">
		<View size={24} />
		<h4>Katvi</h4>
	</svelte:fragment>
	<svelte:fragment slot="skip-to-content">
		<SkipToContent />
	</svelte:fragment>
	<HeaderUtilities>
		<HeaderGlobalAction aria-label="Notifications" icon={Notification} />
	</HeaderUtilities>
</Header>
