import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <p className="footer__text">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <div className="footer-container">
        <p className="footer__copyright">© 2022</p>
        <div className="footer__list">
          <a
            className="footer__link"
            href="https://practicum.yandex.ru/"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>

          <a
            className="footer__link"
            href="https://github.com/Nataly2898"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
