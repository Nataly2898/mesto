import React from "react";
import "./Promo.css";
import Header from "../../Header/Header";

import promo from "../../../images/logo-promo.svg";

const Promo = () => {
  return (
    <section className="promo">
      <Header />
      <div className="promo__container">
        <h1 className="promo__title">
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <img className="promo__logo" src={promo} alt="Логотип промо баннера" />
      </div>
    </section>
  );
};

export default Promo;
