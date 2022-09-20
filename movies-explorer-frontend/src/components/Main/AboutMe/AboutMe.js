import "./AboutMe.css";
import photo from "../../../images/aboutme-foto.jpg";

const AboutMe = () => {
  return (
    <section className="aboutme">
      <h2 className="aboutme__title">Студент</h2>
      <div className="aboutme__container">
        <div className="aboutme__info">
          <h3 className="aboutme__info-title">Наталья</h3>
          <p className="aboutme__info-job">Фронтенд-разработчик, 38 лет</p>
          <p className="aboutme__description">
            Живу в Москве, закончила факультет юриспруденции в МФЮА. Люблю
            путешествовать, море, увлекаюсь горными лыжами. С 2014 года работаю
            в IT компании «Интеллект». После того, как прошла курс по
            веб-разработке, продолжила работать в компании в должности Веб
            разработчика.
          </p>
          <a
            className="aboutme__link"
            href="https://github.com/Nataly2898"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img className="aboutme__photo" src={photo} alt="Мое фото" />
      </div>
    </section>
  );
};

export default AboutMe;
