import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { updateEmail } from "../../redux/actions/authActions/updateProfileActions";
import Navbar from "../navbar/Navbar";

const Email = () => {
  const dispatch = useDispatch();
  const newEmail = (email) => dispatch(updateEmail(email));
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const email = e.target.value;
    setEmail(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newEmail(email);
  };
  return (
    <>
      <Navbar />
      <main className="update-profile">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                type="email"
                placeholder="New Email"
                value={email}
                onChange={handleChange}
                className="update-profile__input"
              />
            </div>
            <div>
              <button className="update" type="submit">
                Save
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default Email;
