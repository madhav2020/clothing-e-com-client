import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FileUploaderComp from "../../../components/file_uploader_comp/FileUploaderComp";
import { useAuth } from "../../../context/Auth.context";

import ms from "./SignUp.module.css";

const SignUp = () => {
  const { sign_up } = useAuth();
  // console.log(sign_up);
  const [image, setImage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(image);
    e.preventDefault();
    console.log("signup function clicked");
    try {
      const { data } = await axios.post("/auth/signup", {
        name,
        phone,
        email,
        password,
        photo:image,
        role: "user",
      });
      console.log(data);
      const user_token = data.token;
      localStorage.setItem("outfit-token", user_token);

      // navigate("/");

      // console.log("signup function activated", data);
    } catch (error) {
      console.log(error);
    }

    // sign_up({
    //   name,
    //   phone,
    //   email,
    //   password,
    //   photo: image,
    // });
  };
  const handleNavigate = () => {
    navigate("/sign-in");
  };

  return (
    <>
      <div className={ms.main_container}>
        <form className={ms.form_container} onSubmit={handleSubmit}>
          <h2 className={ms.form_heading}>Signup Here !</h2>
          {/* this setImage function will have access in the fileUploaderComp (state lifting) */}
          <FileUploaderComp onUpload={setImage} />

          <div className={ms.input_container}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              className={ms.input_filed}
              required
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>

          <div className={ms.input_container}>
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              name="phone"
              id="phone"
              className={ms.input_filed}
              required
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
              }}
            />
          </div>
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
          <button type="submit" className={ms.signup_button}>
            Sign Up
          </button>
          <h6 className={ms.redirection_link}>
            Already a user?{" "}
            <span className={ms.redirect_text} onClick={handleNavigate}>
              Login Now
            </span>{" "}
          </h6>
        </form>
      </div>
    </>
  );
};

export default SignUp;
