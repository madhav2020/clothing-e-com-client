import React from "react";
import { Routes, Route } from "react-router-dom";
import ParentComp from "../testing/parent-comp/ParentComp";
import NavComp from "../components/nav_comp/NavComp";
import Cart from "../pages/app-pages/cart-page/Cart";
import Home from "../pages/app-pages/home-page/Home";
import Order from "../pages/app-pages/order-page/Order";
import ProductDetails from "../pages/app-pages/product-detail-page/ProductDetails";
import Profile from "../pages/app-pages/profile-page/Profile";
import SignIn from "../pages/auth-pages/signin-page/SignIn";
import SignUp from "../pages/auth-pages/signup-page/SignUp";

const AppRouter = () => {
  return (
    <>
    <NavComp />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orders" element={<Order />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/profile/:id" element={<Profile />} />
      <Route path="/sign-in" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/testing" element={<ParentComp />} />
    </Routes>
    </>
  );
};

export default AppRouter;
