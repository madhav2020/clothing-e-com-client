import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/Auth.context";

import ms from "./SignIn.module.css";

const SignIn = () => {
  const { sign_in } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("sign in clicked");
    sign_in(email, password);
  };
  const handleNavigate = () => {
    navigate("/sign-up");
  };

  return (
    <>
      <div className={ms.main_container}>
        <form className={ms.form_container} onSubmit={handleSubmit}>
          <h2 className={ms.form_heading}>Login Here !</h2>
          <div className={ms.input_container}>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className={ms.input_filed}
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className={ms.input_container}>
            <label htmlFor="password">Password</label>
            <input
              type="text"
              name="password"
              id="password"
              className={ms.input_filed}
              required
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit" className={ms.login_button}>
            Login
          </button>
          <h6 className={ms.redirection_link}>
            Don't have account yet?
            <span className={ms.redirect_text} onClick={handleNavigate}>
              Signup First
            </span>
          </h6>
        </form>
      </div>
    </>
  );
};

export default SignIn;
