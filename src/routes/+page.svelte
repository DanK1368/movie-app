<script>
	import PopularMovies from '../components/PopularMovies.svelte';
	import { fly } from 'svelte/transition';
	import SearchMovies from '../components/SearchMovies.svelte';
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<section in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<SearchMovies />
	<PopularMovies movies={data.results} />
</section>
