import React, { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import "./Navigation.css";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navigation = ({ loggedIn }) => {
  const [isOpen, setIsOpen] = useState(false);
  const routeMatch = useRouteMatch();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation">
      {loggedIn ? (
        <>
          <div className="navigation__list">
            <Link
              to="/movies"
              className={
                routeMatch.path === "/movies"
                  ? "navigation__movies-link_active"
                  : "navigation__movies-link"
              }
            >
              Фильмы
            </Link>
            <Link
              to="/saved-movies"
              className={
                routeMatch.path === "/saved-movies"
                  ? "navigation__movies-link_active"
                  : "navigation__movies-link"
              }
            >
              Сохранённые фильмы
            </Link>
          </div>
          <div>
            <Link to="/profile">
              <div className="navigation__account"></div>
            </Link>
          </div>
        </>
      ) : (
        <div className="navigation__authorization">
          <Link to="/signup" className="navigation__link">
            Регистрация
          </Link>
          <Link to="/signin">
            <button className="navigation__button">Войти</button>
          </Link>
        </div>
      )}
      {!isOpen && loggedIn ? (
        <button className="burger__button" onClick={toggleMenu} />
      ) : (
        <BurgerMenu onClose={toggleMenu} />
      )}
    </nav>
  );
};

export default Navigation;
