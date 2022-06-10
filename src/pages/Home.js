import React from "react";
import HelmetConfig from "../components/HelmetConfig";
import Navigation from "../components/Navigation";

const Home = () => {
  return (
    <main className="container">
      <HelmetConfig pageLocation="Home" />
      <section className="title-main">
        <h1>
          The <span className="exp">Experimental</span> Playground of
        </h1>
      </section>
      <section className="title-vertical">
        <h1>Jungah Ahn</h1>
      </section>
      <aside className="side-text">
        <p>Full-stack developer</p>
      </aside>
      <footer className="footer">
        <p>Latest Update: 08/06/2022</p>
      </footer>

      <Navigation className="navigation" />
    </main>
  );
};

export default Home;
