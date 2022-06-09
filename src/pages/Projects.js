import HelmetConfig from "../components/HelmetConfig";

const Projects = () => {
  return (
    <main className="main-section">
      <HelmetConfig pageLocation="Projects" />
      <h1 className="page-title">portfolio</h1>

      <section className="project-container">
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udacity-travel-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">
              Travel
              <br />
              Weather App
            </h3>
            <h5 className="project-tech">API JS HTML/CSS</h5>
          </div>
        </div>
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udacity-weather-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://dry-journey-77285.herokuapp.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">Weather App</h3>
            <h5 className="project-tech">API JS HTML/CSS</h5>
          </div>
        </div>
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udacity-webpack-api-nlp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">
              Sentiment Analysis for News Article
            </h3>
            <h5 className="project-tech">API JS HTML/CSS</h5>
          </div>
        </div>
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udemy-simon-game"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://aanmeba.github.io/udemy-simon-game/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">Simon Game</h3>
            <h5 className="project-tech">JS HTML/CSS</h5>
          </div>
        </div>
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udacity-landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://aanmeba.github.io/udacity-landing-page/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">Landing Page</h3>
            <h5 className="project-tech">JS HTML/CSS</h5>
          </div>
        </div>
        <div className="project-box">
          <div className="project-box__link">
            <a
              href="https://github.com/aanmeba/udacity-personal-blog"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://aanmeba.github.io/udacity-personal-blog/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fas fa-external-link-alt"></i>
            </a>
          </div>
          <div className="project-box__content">
            <h3 className="project-heading">Personal Blog</h3>
            <h5 className="project-tech">HTML/CSS</h5>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Projects;
