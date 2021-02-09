import React, { useEffect, useState } from "react";
import { getUserShowList } from "../../redux/actions/myListActions/getUserShowList";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../navbar/Navbar";
import "./myList.scss";
import Modal from "../modal/Modal";

const MyList = () => {
  const user = useSelector((state) => state.auth.user);
  const getListItems = (user) => dispatch(getUserShowList(user));
  const dispatch = useDispatch();
  const getUserShows = useSelector(
    (state) => state.getUserShowList.getUserShowList
  );
  const [movie, setMovie] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const openModal = (movie) => {
    setMovie(movie);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    getListItems(user.uid);
  }, [getListItems, user.uid]);

  return (
    <>
      <Navbar />
      <main className="my-list">
        <h1>My List</h1>
        <div className="my-list__shows">
          {getUserShows &&
            getUserShows.map((show) => (
              <div key={show.id} class="list-items">
                <img
                  src={`https://image.tmdb.org/t/p/original/${show.movie.poster_path}`}
                  alt="show list"
                  onClick={() => openModal(show.movie)}
                />
              </div>
            ))}
        </div>
        <Modal open={isOpen} closeModal={closeModal} movie={movie} />
      </main>
    </>
  );
};

export default MyList;
