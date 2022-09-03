/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
	const res = await fetch(
		`https://api.themoviedb.org/3/search/movie?api_key=24c6c37bd99b4a474d4ed4cdaf8f02b6&language=en-US&query=${params.search_id}&page=1&include_adult=false`
	);
	const data = await res.json();

	if (res.ok) {
		return data;
	}
}
