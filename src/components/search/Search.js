import React, { useState } from "react";
import { useSelector } from "react-redux";
import Modal from "../modal/Modal";
import "./search.scss";
import Searchbar from "./Searchbar";

const Search = () => {
  const searchedItems = useSelector((state) => state.search.searchedShows);
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
      <Searchbar />
      <main className="search-list">
        <h1>Search Results :</h1>
        <div className="search-list__shows">
          {searchedItems.results &&
            searchedItems.results.map((show) => (
              <div key={show.id} className="list-items" data-id={show.id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                  alt={show.title || show.original_title}
                  onClick={() => openModal(show)}
                />
              </div>
            ))}
        </div>
        <Modal open={isOpen} closeModal={closeModal} movie={movie} />
      </main>
    </>
  );
};

export default Search;
