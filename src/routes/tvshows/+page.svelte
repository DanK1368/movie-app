<script>
	import PopularShows from '../../components/PopularShows.svelte';
	import { fly } from 'svelte/transition';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<PopularShows shows={data.results} />
</section>
