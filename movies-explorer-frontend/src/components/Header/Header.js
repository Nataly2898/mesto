import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../images/logo-header.svg";
import Navigation from "../Navigation/Navigation";

const Header = ({ loggedIn }) => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Логотип" className="header__logo" />
      </Link>
      <Navigation loggedIn={loggedIn} />
    </header>
  );
};

export default Header;
