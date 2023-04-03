import React from "react";
import TechStack from "./techStack";
import { Heading, Highlighter } from "./StyledComponents";

const About = () => (
  <>
    <Heading>
      I'm <Highlighter>Jungah&nbsp;Ahn</Highlighter>, a{" "}
      <Highlighter>junior&nbsp;full-stack&nbsp;developer</Highlighter> based in
      Sydney, Australia with experience in building web applications mainly
      using{" "}
      <Highlighter>React.js&nbsp;and&nbsp;Ruby&nbsp;on&nbsp;Rails</Highlighter>
    </Heading>
    <TechStack />
  </>
);

export default About;
