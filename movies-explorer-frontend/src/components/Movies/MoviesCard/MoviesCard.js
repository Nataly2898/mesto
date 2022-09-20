import "./MoviesCard.css";
import React from "react";
import { useLocation } from "react-router-dom";

const MoviesCard = ({ movie }) => {
  const [favorite, setFavorite] = React.useState(false);

  function handleFavorite() {
    setFavorite(!favorite);
  }

  const { pathname } = useLocation();

  return (
    <section className="card">
      <img src={movie.image} alt={movie.name} className="card__image"></img>
      <div className="card__description">
        <p className="card__name">{movie.name}</p>

        {pathname === "/saved-movies" ? (
          <button type="button" className="card__button card__button_delete" />
        ) : (
          <button
            type="button"
            className={`card__button card__button${
              favorite ? "_active" : "_inactive"
            }`}
            onClick={handleFavorite}
          />
        )}
      </div>
      <p className="card__duration">{movie.duration}</p>
    </section>
  );
};

export default MoviesCard;
