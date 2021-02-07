import React from "react";

import "./movies.scss";

const Movies = ({ movies, title }) => {
  return (
    <main className="movies">
      <p className="movies-head">{title}</p>
      <div className="movies-child">
        {movies &&
          movies.map((movie) => (
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
              alt={`${movie.name}`}
              className="movies-child__image"
              key={movie.id}
            />
          ))}
      </div>
    </main>
  );
};

export default Movies;
