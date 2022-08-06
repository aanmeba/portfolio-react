import React from "react";
import HelmetConfig from "../components/helmet_config";
import {
  Heading,
  MainContainer,
  Highlighter,
  ExtraHeading,
} from "../components/StyledComponents";
import Contact from "../components/contact";
import TechStack from "../components/tech_stack";

const Home = () => {
  return (
    <MainContainer>
      <HelmetConfig pageLocation="Home" />
      <ExtraHeading>Hello World!</ExtraHeading>
      <Heading>
        I'm <Highlighter>Jungah Ahn</Highlighter> who is a{" "}
        <Highlighter>junior full-stack developer</Highlighter> with experience
        building web apps using React.js and Ruby on Rails, based on Sydney,
        Australia.
      </Heading>
      <TechStack />
      <Contact />
    </MainContainer>
  );
};

export default Home;
