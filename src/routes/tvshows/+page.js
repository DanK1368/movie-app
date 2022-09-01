/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/tv/popular?api_key=24c6c37bd99b4a474d4ed4cdaf8f02b6&language=en-US&page=1`
	);
	const { results } = await res.json();

	return {
		results
	};
}
