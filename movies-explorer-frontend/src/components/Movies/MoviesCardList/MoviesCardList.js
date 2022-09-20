import React, { useState } from "react";
import "./MoviesCardList.css";
import Preloader from "../Preloader/Preloader";
import MoviesCard from "../MoviesCard/MoviesCard";

const MoviesCardList = ({ movies, buttonMore }) => {
  const [isLoading, setLoading] = useState(false);

  const handlePreloader = () => {
    setLoading(true);
  };

  return (
    <section className="cards">
      <ul className="cards__list">
        {movies.map((movie) => (
          <MoviesCard key={movie.id} movie={movie} />
        ))}
      </ul>

      {isLoading ? (
        <Preloader />
      ) : (
        buttonMore && (
          <div className="cards__button-container">
            <button
              className="cards__button"
              type="button"
              name="more"
              onClick={handlePreloader}
            >
              Ещё
            </button>
          </div>
        )
      )}
    </section>
  );
};

export default MoviesCardList;
