import React, { useEffect } from "react";
import "./modal.scss";
import { VscChromeClose } from "react-icons/vsc";
import { CgMathPlus } from "react-icons/cg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GrPlayFill } from "react-icons/gr";
import { MdCheck } from "react-icons/md";
import { useHistory } from "react-router-dom";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { addShowToList } from "../../redux/actions/myListActions/addShowToList";
import { getUserShowList } from "../../redux/actions/myListActions/getUserShowList";
import { removeShowFromTheList } from "../../redux/actions/myListActions/removeShowFromTheList";

const Modal = ({ open, closeModal, movie, movieId }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const addShow = (uid, show) => dispatch(addShowToList(uid, show));
  const getListItems = (user) => dispatch(getUserShowList(user));
  const removeShowFromTheMyList = (movieId) =>
    dispatch(removeShowFromTheList(movieId));
  const history = useHistory();

  useEffect(() => {
    getListItems(user.uid);
  }, []);

  const addShowMyList = (uid, show) => {
    if (user) {
      addShow(uid, show);
    }
  };

  const handleIcon = () => {
    if (history.location.pathname !== "/browse/my-list") {
      return (
        <button type="button" onClick={() => addShowMyList(user.uid, movie)}>
          <CgMathPlus className="plus-icon" />
        </button>
      );
    } else {
      return (
        <button type="button" onClick={() => removeShowFromTheMyList(movieId)}>
          <MdCheck className="plus-icon" />
        </button>
      );
    }
  };

  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay" onClick={closeModal}></div>
      <main className="portal-modal">
        <div className="portal-modal__child">
          <div className="portal-modal__image">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
              alt="netflix movie"
            />
            <div className="modal-close">
              <button type="button" onClick={closeModal}>
                <VscChromeClose className="close-icon" />
              </button>
            </div>
            <div className="portal-modal__btns">
              <div className="portal-btns__child">
                <div>
                  <button className="modal-play__btn">
                    <span
                      style={{
                        verticalAlign: "text-bottom",
                        marginRight: ".5rem",
                      }}
                    >
                      <GrPlayFill />
                    </span>
                    Play
                  </button>
                </div>
                <div>{handleIcon()}</div>
                <div>
                  <button type="button">
                    <FaThumbsUp className="like-icon" />
                  </button>
                </div>
                <div>
                  <button type="button">
                    <FaThumbsDown className="like-icon" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="portal-modal__description">
            <div>
              <p>{movie.release_date || movie.name}</p>
              <p>{movie.overview.substr(0, 250)}</p>
            </div>
          </div>
        </div>
      </main>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
