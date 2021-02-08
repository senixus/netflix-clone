import React from "react";
import "../movies/movies.scss";

const Tv = ({ shows, title }) => {
  return (
    <div>
      <main className="movies">
        <p className="movies-head">{title}</p>
        <div className="movies-child">
          {shows &&
            shows.map((show) => (
              <img
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt="popular"
                className="movies-child__image"
                key={show.id}
              />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Tv;
