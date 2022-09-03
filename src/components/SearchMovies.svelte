<script>
	import { goto } from '$app/navigation';
	import { fly } from 'svelte/transition';

	let searchValue = '';
	let active = false;

	const toggleActive = () => (searchValue ? (active = true) : (active = false));

	const searchMovies = () => {
		goto(`/search/${searchValue}`);
	};
</script>

<form class="search" on:submit|preventDefault={searchMovies}>
	<label class={active ? 'label_blur active' : 'label_blur'} for="search_movie">Search Movies</label
	>

	<input
		on:blur={() => toggleActive()}
		on:focus={() => (active = true)}
		bind:value={searchValue}
		type="text"
		name="search_movie"
	/>
	<button class={!active ? 'disabled' : ''}>Search</button>
</form>

<style>
	.search {
		position: relative;
		width: clamp(300px, 30%, 400px);
		margin-bottom: 3rem;
	}

	button {
		font-size: 0.7rem;
		padding: 0rem 1rem;
		background: rgb(96, 110, 201);
		color: white;
		font-weight: bold;
		border: none;
		position: absolute;
		bottom: 50%;
		right: 0;
		transform: translate(0, 50%);
		height: 100%;
		border-top-right-radius: 10px;
		border-bottom-right-radius: 10px;
		cursor: pointer;
	}

	.disabled {
		background-color: rgb(166, 166, 166);
		color: rgb(137, 137, 137);
	}

	input {
		width: 100%;
		border: none;
		font-size: 1rem;
		outline: none;
		color: rgb(255, 255, 255);
		padding: 0.5rem 0.1rem;
		transition: background 0.75s ease-out;
		font-weight: bold;
		background: rgb(63, 63, 63);
		border-radius: 10px;
		padding: 1rem;
	}

	.label_blur {
		position: absolute;
		font-size: 0.8rem;
		top: 50%;
		left: 0;
		transform: translate(0, -50%);
		pointer-events: none;
		color: #fff;
		padding: 0rem 1rem;
		transition: all 0.2s ease-in-out;
	}

	.label_blur.active {
		top: -0.8rem;
		color: rgb(63, 63, 63);
		transition: all 0.2s ease-in-out;
	}
</style>
