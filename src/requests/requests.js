const apiKey = "29979b5382a6b6518fb305d2a96c531e";

export const request = {
  // Movies
  getLatestMovies: `/movie/latest?api_key=${apiKey}&language=en-US`,
  getTrendingMovies: `/trending/movies/week?api_key=${apiKey}&language=en-US`,
  getPopularMovies: `/movie/popular?api_key=${apiKey}&language=en-US`,
  getActionMovies: `/discover/movie?api_key=${apiKey}&with_genres=28`,
  getComedyMovies: `/discover/movie?api_key=${apiKey}&with_genres=35`,
  getRomanceMovies: `/discover/movie?api_key=${apiKey}&with_genres=10749`,
  getCrimeMovies: `/discover/movie?api_key=${apiKey}&with_genres=80`,
  getDramaMovies: `/discover/movie?api_key=${apiKey}&with_genres=18`,
  getFamilyMovies: `/discover/movie?api_key=${apiKey}&with_genres=10751`,
  getWarMovies: `/discover/movie?api_key=${apiKey}&with_genres=10752`,

  // TV Shows
  getLatestTv: `/tv/latest?api_key=${apiKey}&language=en-US`,
  getTrendingTv: `/trending/tv/week?api_key=${apiKey}&language=en-US`,
  getNetflixOriginal: `/discover/tv?api_key=${apiKey}&with_networks=213`,
  getPopularTv: `/tv/popular?api_key=${apiKey}&language=en-US`,
  getFamilyTvShows: `/discover/tv?api_key=${apiKey}&with_genres=10751`,
  getActionAdventureTvShows: `/discover/tv?api_key=${apiKey}&with_genres=10759`,
  getComedyTvShows: `/discover/tv?api_key=${apiKey}&with_genres=35`,
  getCrimeTvShows: `/discover/tv?api_key=${apiKey}&with_genres=80`,
  getDramaTvShows: `/discover/tv?api_key=${apiKey}&with_genres=18`,
  getWarTvShows: `/discover/tv?api_key=${apiKey}&with_genres=10768`,
};
