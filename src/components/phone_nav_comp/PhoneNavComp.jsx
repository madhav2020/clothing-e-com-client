import React from "react";
import ms from "./PhoneNavComp.module.css";

// ASSETS
import home from "../../assets/phone-icons/home.png";
import user from "../../assets/phone-icons/user.png";
import cart from "../../assets/phone-icons/cart.png";
import menu from "../../assets/phone-icons/menu.png";
import { Link } from "react-router-dom";
const PhoneNavComp = () => {
  return (
    <div className={ms.phone_main_container}>
      <nav className={ms.phone_nav_container}>
        <div className={ms.home_container}>
          <Link to="/home">
            <img src={home} alt="home" />{" "}
          </Link>
        </div>

        <div className={ms.login_signup}>
          <img src={user} alt="Login" />
        </div>

        <div className={ms.cart_container}>
          <Link to="/cart">
            <img src={cart} alt="Cart" />
          </Link>
        </div>

        <div className={ms.menu_container}>
          <img src={menu} alt="menu" />
        </div>
      </nav>
    </div>
  );
};

export default PhoneNavComp;
