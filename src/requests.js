const API_KEY="cb1b5cf6dcf9f231870068833a5acf7d";

const requests = {
    fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomaceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,

    fetchAwardWinningTV: `/discover/tv?api_key=${API_KEY}&with_keywords=6075`, // Award-winning
    fetchTopRatedTV: `/tv/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchUSTV: `/discover/tv?api_key=${API_KEY}&with_origin_country=US`,
    fetchInternationalTV: `/discover/tv?api_key=${API_KEY}&with_original_language=ko|ja|es|fr`,
    fetchKDrama: `/discover/tv?api_key=${API_KEY}&with_original_language=ko`,
    fetchSuspenseTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648&vote_average.gte=7`, // Suspenseful & rated

    fetchTop10Movies: `/trending/movie/day?api_key=${API_KEY}&region=PK`,
    fetchHindiMovies: `/discover/movie?api_key=${API_KEY}&with_original_language=hi`,
    fetchAwardWinners: `/discover/movie?api_key=${API_KEY}&with_keywords=awards`,
    fetchThrillers: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
    fetchRealLife: `/discover/movie?api_key=${API_KEY}&with_keywords=true-story`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchSciFiMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
};

export default requests;