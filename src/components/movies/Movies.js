import React, { useState } from "react";
import Modal from "../modal/Modal";
import "./movies.scss";

const Movies = ({ movies, title }) => {
  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (movie) => {
    setMovie(movie);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
              onClick={() => openModal(movie)}
            />
          ))}
      </div>
      <Modal open={isOpen} closeModal={closeModal} movie={movie} />
    </main>
  );
};

export default Movies;
