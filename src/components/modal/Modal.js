import React from "react";
import "./modal.scss";
import { VscChromeClose } from "react-icons/vsc";
import { CgMathPlus } from "react-icons/cg";
import { FaThumbsUp, FaThumbsDown } from "react-icons/fa";
import { GrPlayFill } from "react-icons/gr";
import ReactDOM from "react-dom";

const Modal = ({ open, closeModal, movie }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <div className="overlay"></div>
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
              <div>
                <button type="button">
                  <CgMathPlus className="plus-icon" />
                </button>
              </div>
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
