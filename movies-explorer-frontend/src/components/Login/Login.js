import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo-header.svg";
import useFormValidation from "../../utils/useFormValidation";

const Login = () => {
  const { values, errors, handleChange } = useFormValidation();

  return (
    <div className="form">
      <div className="form__header">
        <Link to="/">
          <img src={logo} alt="Логотип" className="form__logo" />
        </Link>

        <h1 className="form__title">Рады видеть!</h1>
      </div>

      <form className="form__container">
        <label className="form__item" htmlFor="email">
          E-mail
        </label>
        <input
          className="form__input"
          type="email"
          id="email"
          name="email"
          required
          value={values.email || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.email}</span>
        <label className="form__item" htmlFor="password">
          Пароль
        </label>
        <input
          className="form__input"
          type="password"
          id="password"
          name="password"
          required
          value={values.password || ""}
          onChange={handleChange}
        />
        <span className="form__error">{errors.password}</span>
        <button className="form__button" type="submit">
          Войти
        </button>
      </form>
      <div className="form__register">
        <span>Ещё не зарегистрированы?</span>
        <Link to="signup" className="form__link">
          Регистрация
        </Link>
      </div>
    </div>
  );
};

export default Login;
