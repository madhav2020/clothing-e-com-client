import React from "react";

import ms from "./NavComp.module.css";
// ASSETS
import nav_logo from "../../assets/new-logo.png";
import nav_cart from "../../assets/cart.png";
import nav_user from "../../assets/user.png";
import nav_search from "../../assets/search.png";
import nav_filter from "../../assets/filter-color.png";
import { Link } from "react-router-dom";

const NavComp = () => {
  return (
    <nav className={ms.nav_main_container}>
      <div className={ms.left_container}>
        <Link to="/">
          <img src={nav_logo} alt="brand logo" />
        </Link>

        <h2>Outfit</h2>
      </div>
      <div className={ms.center_container}>
        <div id="search" className={ms.search_box}>
          <input type="text" placeholder="Search..." />
          <img src={nav_search} alt="search" />
        </div>
        <div className={ms.filter_container}>
          <img src={nav_filter} alt="filter" />
        </div>
      </div>

      <div className={ms.seller_container}>
        <Link to="/seller-registration">
          <h2>Are you seller?</h2>
        </Link>
      </div>

      <div className={ms.right_container}>
        <div className={ms.cart}>
          <img src={nav_cart} alt="cart icon" />
        </div>
        <div className={ms.login_signup}>
          <img src={nav_user} alt="Login" />
        </div>
      </div>
    </nav>
  );
};

export default NavComp;
