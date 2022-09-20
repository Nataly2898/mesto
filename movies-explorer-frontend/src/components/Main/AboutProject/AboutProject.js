import "./AboutProject.css";

const AboutProject = () => {
  return (
    <section className="about">
      <h2 className="about__title">О проекте</h2>
      <ul className="about__info">
        <li className="about__info-description">
          <h3>Дипломный проект включал 5 этапов</h3>
          <p>
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="about__info-description">
          <h3>На выполнение диплома ушло 5 недель</h3>
          <p>
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div>
        <div className="about__time-scale">
          <div className="about__backend">1 неделя</div>
          <div className="about__frontend">4 недели</div>
        </div>
        <div className="about__time-text">
          <p className="about__backend-text">Back-end</p>
          <p className="about__frontend-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};

export default AboutProject;
