import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo-header.svg";
import useFormValidation from "../../utils/useFormValidation";

const Register = () => {
  const { values, errors, handleChange } = useFormValidation();

  return (
    <section className="regform">
      <div className="regform__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="regform__logo" />
        </Link>

        <h1 className="regform__title">Добро пожаловать!</h1>
      </div>

      <form className="regform__container">
        <label className="regform__item" htmlFor="name">
          Имя
        </label>
        <input
          className="regform__input"
          type="text"
          id="name"
          name="name"
          minLength={2}
          required
          value={values.name || ""}
          onChange={handleChange}
        />
        <span className="regform__error">{errors.name}</span>
        <label className="regform__item" htmlFor="email">
          E-mail
        </label>
        <input
          className="regform__input"
          type="email"
          id="email"
          name="email"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="regform__error">{errors.email}</span>
        <label className="regform__item" htmlFor="password">
          Пароль
        </label>
        <input
          className="regform__input"
          type="password"
          id="password"
          name="password"
          minLength={6}
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="regform__error">{errors.password}</span>
        <button className="regform__button" type="submit">
          Зарегистрироваться
        </button>
      </form>
      <div className="regform__register">
        <span>Уже зарегистрированы?</span>
        <Link to="/signin" className="regform__link">
          Войти
        </Link>
      </div>
    </section>
  );
};

export default Register;
