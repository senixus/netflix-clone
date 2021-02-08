const apiKey = "APIKEY";

export const request = {
  // Movies

  getTrendingMovies: `/trending/movies/week?api_key=${apiKey}&language=en-US`,
  getPopularMovies: `/movie/popular?api_key=${apiKey}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  getRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  getCrimeMovies: `/discover/movie?api_key=${apiKey}&with_genres=80`,
  getDramaMovies: `/discover/movie?api_key=${apiKey}&with_genres=18`,
  getWarMovies: `/discover/movie?api_key=${apiKey}&with_genres=10752`,

  // TV Shows

  getTrendingTv: `/trending/tv/week?api_key=${apiKey}&language=en-US`,
  getNetflixOriginal: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  getPopularTv: `/tv/popular?api_key=${apiKey}&language=en-US`,
  getActionAdventureTvShows: `/discover/tv?api_key=${apiKey}&with_genres=10759`,
  getCrimeTvShows: `/discover/tv?api_key=${apiKey}&with_genres=80`,
  getDramaTvShows: `/discover/tv?api_key=${apiKey}&with_genres=18`,
  getWarTvShows: `/discover/tv?api_key=${apiKey}&with_genres=10768`,
};
