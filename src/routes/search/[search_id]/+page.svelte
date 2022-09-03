<script>
	import MovieCard from '../../../components/MovieCard.svelte';
	export let data;
</script>

<h3>We found the following results</h3>
<div class="popular-movies">
	{#each data.results as movie}
		<MovieCard {movie} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}

	.popular-movies {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
