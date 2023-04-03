import React from "react";
import HelmetConfig from "../components/helmetConfig";
import {
  MainContainer,
  ExtraHeading,
  DivClickable,
} from "../components/StyledComponents";
import Contact from "../components/contact";
import About from "../components/about";
import { useState } from "react";
import Running from "../components/running";

const Home = ({ strava }) => {
  const [about, setAbout] = useState(true);
  const handleClick = (event) => {
    event.preventDefault();
    setAbout(!about);
  };

  return (
    <MainContainer>
      <HelmetConfig pageLocation="Home" />
      <ExtraHeading>Hello World!</ExtraHeading>
      <DivClickable onClick={handleClick}>
        {about ? <About /> : <Running strava={strava} />}
      </DivClickable>
      <Contact />
    </MainContainer>
  );
};

export default Home;
