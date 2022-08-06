import React from "react";
import RunningStack from "./running_stack";
import { Heading, Highlighter } from "./StyledComponents";

const About = () => {
  return (
    <>
      <Heading>
        I'm <Highlighter>Jungah Ahn</Highlighter> who enjoys{" "}
        <Highlighter>running and trail running</Highlighter>. You can see me
        running (almost) every Saturday at Rhodes Parkrun 🏃🏻‍♀️
      </Heading>
      <RunningStack />
    </>
  );
};

export default About;
