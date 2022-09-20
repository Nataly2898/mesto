import "./Portfolio.css";

const Portfolio = () => {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__container">
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Nataly2898/how-to-learn"
            target="_blank"
            rel="noreferrer"
          >
            Статичный сайт
          </a>
          <span>↗</span>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Nataly2898/russian-travel"
            target="_blank"
            rel="noreferrer"
          >
            Адаптивный сайт
          </a>
          <span>↗</span>
        </li>
        <li>
          <a
            className="portfolio__link"
            href="https://github.com/Nataly2898/react-mesto-api-full"
            target="_blank"
            rel="noreferrer"
          >
            Одностраничное приложение
          </a>
          <span>↗</span>
        </li>
      </ul>
    </section>
  );
};

export default Portfolio;
