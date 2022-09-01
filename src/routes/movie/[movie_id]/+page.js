/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/movie/${params.movie_id}?api_key=24c6c37bd99b4a474d4ed4cdaf8f02b6&language=en-US`
	);
	const data = await res.json();

	return data;
}
