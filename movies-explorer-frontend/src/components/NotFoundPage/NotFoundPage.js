import React from "react";
import { Link } from "react-router-dom";
import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <section className="notfoundpage">
      <h1 className="notfoundpage__title">404</h1>
      <h2 className="notfoundpage__subtitle">Страница не найдена</h2>
      <Link className="notfoundpage__link" to="/">
        Назад
      </Link>
    </section>
  );
};

export default NotFoundPage;
