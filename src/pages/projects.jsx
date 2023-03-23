import HelmetConfig from "../components/helmet_config";
import { CardContainer, MainContainer } from "../components/StyledComponents";
import { ProjectCategories } from "../components/project_categories";
import { ProjectSorting } from "../components/project_sorting";
import { useState } from "react";

const projectList = require("../data/projectdetails.json");

const Projects = () => {
  const [sorting, setSorting] = useState("project");
  const [hoveredChild, setHoveredChild] = useState(null);
  const handleHover = (id) => setHoveredChild(id);

  return (
    <MainContainer className="main-section">
      <HelmetConfig pageLocation="Projects" />
      <ProjectCategories
        sorting={sorting}
        setSorting={setSorting}
        hoveredChild={hoveredChild}
        handleHover={handleHover}
      />
      <CardContainer className="project-container">
        <ProjectSorting
          projectList={projectList}
          sorting={sorting}
          hoveredChild={hoveredChild}
          handleHover={handleHover}
        />
      </CardContainer>
    </MainContainer>
  );
};

export default Projects;
