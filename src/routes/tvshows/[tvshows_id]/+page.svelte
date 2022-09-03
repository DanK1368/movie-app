<script>
	import { fly } from 'svelte/transition';
	export let data;
</script>

<div class="show-details" in:fly={{ y: 50, duration: 500, delay: 500 }} out:fly={{ duration: 500 }}>
	<div class="img-container">
		<img src={`https://image.tmdb.org/t/p/original${data.backdrop_path}`} alt="" />
	</div>
	<div class="text-container">
		<h1>{data.name}</h1>
		<h2>{data.tagline}</h2>
		<p class="overview">{data.overview}</p>
		<p>
			<span>Created by:</span>
			{#each data.created_by as creator}
				{creator.name}
			{/each} <br />
			<span>Release Date:</span>
			{data.release_date} <br />
			<span>Number of Episodes</span>${data.number_of_episodes} <br />
			<span>Number of Seasons</span>${data.number_of_seasons} <br />
			<span>Rating:</span>
			{data.vote_average} <br />
		</p>
	</div>
	<a class="link" href="/tvshows">TV Shows Overview</a>
</div>

<style>
	h1 {
		padding: 1rem 0rem 2rem;
	}

	p {
		padding: 1rem 0rem;
	}

	.img-container {
		width: 100%;
	}

	img {
		width: 100%;
		border-radius: 1rem;
	}

	.show-details {
		margin: 2rem 20%;
	}

	span {
		font-weight: bold;
	}

	.link {
		background: dodgerblue;
		color: white;
		text-decoration: none;
		padding: 0.5rem 1rem;
		border-radius: 10px;
	}

	.link:hover {
		opacity: 0.7;
	}
</style>
