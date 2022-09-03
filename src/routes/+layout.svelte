<script>
	import './global.css';
</script>

<svelte:head>
	<title>Movie DB</title>
</svelte:head>

<header>
	<nav class="navbar">
		<a href="/">Movies</a>
		<a href="/tvshows">TV Shows</a>
	</nav>
</header>

<slot />

<style>
	.navbar {
		width: 100%;
		min-height: 8vh;
		gap: 1rem;
		display: flex;
		justify-content: flex-end;
		align-items: center;
	}

	a {
		color: black;
		text-decoration: none;
	}
</style>
