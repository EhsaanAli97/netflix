const API_KEY = 'b448b77a5083281d4aaeacf3ed913935';

const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

export default requests;
