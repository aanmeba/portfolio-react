import React from "react";
import TechStack from "../components/tech_stack";
import { Heading, Highlighter } from "./StyledComponents";

const About = () => {
  return (
    <>
      <Heading>
        I'm <Highlighter>Jungah Ahn</Highlighter> who is a{" "}
        <Highlighter>junior full-stack developer</Highlighter> with experience
        building web apps using React.js and Ruby on Rails, based on Sydney,
        Australia.
      </Heading>
      <TechStack />
    </>
  );
};

export default About;
