<script>
	import PopularShows from '../../components/PopularShows.svelte';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<PopularShows shows={data.results} />
</section>
