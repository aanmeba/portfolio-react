import React from "react";
import RunningRecords from "./runningRecords";
import { Heading, Highlighter } from "./StyledComponents";

const Running = ({ strava }) => (
  <>
    <Heading>
      I'm <Highlighter>Jungah Ahn</Highlighter> who enjoys{" "}
      <Highlighter>running and trail running</Highlighter>. You can see me
      running (almost) every Saturday at Rhodes Parkrun 🏃🏻‍♀️
    </Heading>
    <RunningRecords strava={strava} />
  </>
);

export default Running;
