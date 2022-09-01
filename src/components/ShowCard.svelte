<script>
	export let show;
</script>

<div class="show-card">
	<a href={`/tvshows/${show.id}`}>
		<img src={`https://image.tmdb.org/t/p/original${show.poster_path}`} alt={show.title} />
	</a>
	<div class="description">
		<h2>{show.name}</h2>
	</div>
</div>

<style>
	img {
		width: 100%;
		height: 40vh;
		object-fit: cover;
		border-radius: 1rem;
		margin-bottom: 1rem;
	}

	h2 {
		font-size: 0.9rem;
	}

	p {
		font-size: 0.7rem;
	}

	.description {
		height: 5vh;
	}

	.show-card {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		padding: 0.5rem;
	}
</style>
