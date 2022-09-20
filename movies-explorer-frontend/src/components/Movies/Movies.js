import React from 'react';
import Header from '../Header/Header';
import MoviesCardList from './MoviesCardList/MoviesCardList';
import SearchForm from './SearchForm/SearchForm';
import movies from '../../utils/Movies';
import Footer from '../Footer/Footer';


const Movies = ({ loggedIn }) => {
  return (
    <section>
      <Header loggedIn={loggedIn} />
      <SearchForm />
      <MoviesCardList buttonMore={true} movies={movies} />
      <Footer />
    </section>
  )
};

export default Movies;