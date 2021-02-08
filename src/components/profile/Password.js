import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePassword } from "../../redux/actions/authActions/updateProfileActions";
import Navbar from "../navbar/Navbar";

const Password = () => {
  const dispatch = useDispatch();
  const newPassword = (password) => dispatch(updatePassword(password));
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    newPassword(password);
  };

  return (
    <>
      <Navbar />
      <main className="update-profile">
        <div>
          <form className="form" onSubmit={handleSubmit}>
            <div>
              <input
                type="password"
                placeholder="New Password"
                value={password}
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

export default Password;
