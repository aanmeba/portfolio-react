import React from "react";
import HelmetConfig from "../components/HelmetConfig";
import {
  Heading,
  MainContainer,
  Highlighter,
  ExtraHeading,
} from "../components/StyledComponents";
import Contact from "../components/Contact";
import TechStack from "../components/TechStack";

const Home = () => {
  return (
    <MainContainer>
      <HelmetConfig pageLocation="Home" />
      <ExtraHeading>Hello World!</ExtraHeading>
      <Heading>
        I'm <Highlighter>Jungah Ahn</Highlighter> who is a{" "}
        <Highlighter>junior full-stack developer</Highlighter> with experience
        building React.js websites and Ruby on Rails web applications, based on
        Sydney, Australia.
      </Heading>
      <TechStack />
      <Contact />
    </MainContainer>
  );
};

export default Home;
