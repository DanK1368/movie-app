<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section>
	<PopularMovies movies={data.results} />
</section>
