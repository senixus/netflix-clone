import React, { useState } from "react";
import Modal from "../modal/Modal";
import "../movies/movies.scss";

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
    <>
      <section className="movies">
        <p className="movies-head">{title}</p>

        <div className="movies-child">
          {shows &&
            shows.map((show) => (
              <img
                src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                alt={`${show.title}`}
                className="movies-child__image"
                key={show.id}
                onClick={() => openModal(show)}
              />
            ))}
        </div>

        <Modal open={isOpen} closeModal={closeModal} movie={movie} />
      </section>
    </>
  );
};

export default Tv;
