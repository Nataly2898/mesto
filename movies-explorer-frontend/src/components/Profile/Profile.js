import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import Header from "../Header/Header";

const Profile = ({ loggedIn }) => {
  const [name, setName] = useState("Наталья");
  const [email, setEmail] = useState("pochta@yandex.ru");

  return (
    <section>
      <Header loggedIn={loggedIn} />
      <form className="profile__container">
        <h1 className="profile__title">Привет, Наталья!</h1>
        <form className="profile__form">
          <div className="profile__field">
            <label className="profile__label">Имя</label>
            <input
              type="text"
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
              className="profile__input"
              required
            />
          </div>
          <div className="profile__line"></div>
          <div className="profile__field">
            <label className="profile__label">E-mail</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="profile__input"
              required
            />
          </div>
        </form>
        <div className="profile__button">
          <Link to="/profile" className="profile__submit">
            Редактировать
          </Link>
          <Link to="/" className="profile__logout-account">
            Выйти из аккаунта
          </Link>
        </div>
      </form>
    </section>
  );
};

export default Profile;
