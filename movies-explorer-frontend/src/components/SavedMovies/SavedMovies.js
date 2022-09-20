import React from "react";
import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../Movies/SearchForm/SearchForm";
import MoviesCardList from "../Movies/MoviesCardList/MoviesCardList";
import savedMovies from "../../utils/savedMovies";
import Footer from "../Footer/Footer";

const SavedMovies = ({ loggedIn }) => {
  return (
    <section className="savedmovies">
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <div className="savedmovies__container">
        <MoviesCardList buttonMore={false} movies={savedMovies} />
      </div>
      <Footer />
    </section>
  );
};

export default SavedMovies;
