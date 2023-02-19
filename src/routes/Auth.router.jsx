import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../pages/auth-pages/signin-page/SignIn";
import SignUp from "../pages/auth-pages/signup-page/SignUp";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/sign_up" element={<SignUp />} />
    </Routes>
  );
};

export default AuthRouter;
