<script>
	import ShowCard from './ShowCard.svelte';
	export let shows;
</script>

<h3>Popular TV Shows</h3>
<div class="popular-shows">
	{#each shows as show}
		<ShowCard {show} />
	{/each}
</div>

<style>
	h3 {
		padding: 0 1rem;
	}

	.popular-shows {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
		column-gap: 1rem;
		row-gap: 2rem;
	}
</style>
