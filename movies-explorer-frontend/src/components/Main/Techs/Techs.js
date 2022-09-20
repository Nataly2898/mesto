import "./Techs.css";

const Techs = () => {
  return (
    <div className="techs">
      <h2 className="techs__title">Технологии</h2>
      <h3 className="techs__info-title">7 технологий</h3>
      <p className="techs__info-subtitle">
        На курсе веб-разработки мы освоили технологии, которые применили в
        дипломном проекте.
      </p>
      <ul className="techs__list">
        <li>HTML</li>
        <li>CSS</li>
        <li>JS</li>
        <li>React</li>
        <li>Git</li>
        <li>Express.js</li>
        <li>mongoDB</li>
      </ul>
    </div>
  );
};

export default Techs;
