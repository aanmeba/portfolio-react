import HelmetConfig from "../components/helmet_config";
import {
  CardContainer,
  // CardBox,
  MainContainer,
  // UlWrapper,
  // Ul,
  // Li,
  // HeadingFour,
  // CardText,
} from "../components/StyledComponents";
// import LazyLoad from "react-lazyload";
import { ProjectCategories } from "../components/project_categories";
import { ProjectSorting } from "../components/project_sorting";
import { useState } from "react";

const projectList = require("../data/projectdetails.json");

const Projects = () => {
  const [sorting, setSorting] = useState("project");

  return (
    <MainContainer className="main-section">
      <HelmetConfig pageLocation="Projects" />
      <ProjectCategories sorting={sorting} setSorting={setSorting} />
      <CardContainer className="project-container">
        <ProjectSorting projectList={projectList} sorting={sorting} />
      </CardContainer>
    </MainContainer>
  );
};

export default Projects;
