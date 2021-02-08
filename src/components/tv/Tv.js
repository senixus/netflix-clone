import React, { useState } from "react";
import "../movies/movies.scss";
import Modal from "../modal/Modal";
const Tv = ({ shows, title }) => {
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
                onClick={() => openModal(show)}
              />
            ))}
        </div>
        <Modal open={isOpen} closeModal={closeModal} movie={movie} />
      </main>
    </div>
  );
};

export default Tv;
