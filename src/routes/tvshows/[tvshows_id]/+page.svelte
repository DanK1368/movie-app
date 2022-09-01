<div class="movie-details">
	<div class="img-container">
		<img src={`https://image.tmdb.org/t/p/original`} alt="" />
	</div>
	<div class="text-container">
		<!-- <h1>{data.title}</h1>
		<p class="overview">{data.overview}</p>
		<p>
			<span>Release Date:</span>
			{data.release_date} <br />
			<span>Budget:</span>${data.budget} <br />
			<span>Rating:</span>
			{data.vote_average} <br />
			<span>Runtime: </span>
			{data.runtime} mins
		</p> -->
	</div>
	<a class="link" href="/">Movie Overview</a>
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

	.movie-details {
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
