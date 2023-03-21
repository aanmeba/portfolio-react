import HelmetConfig from "../components/helmet_config";
import { CardContainer, MainContainer } from "../components/StyledComponents";
// import { ProjectCategories } from "../components/project_categories";
import { ProjectSorting } from "../components/project_sorting";

const projectList = require("../data/projectdetails.json");

const Projects = () => {
  // const [sorting, setSorting] = useState("project");

  return (
    <MainContainer className="main-section">
      <HelmetConfig pageLocation="Projects" />
      {/* <ProjectCategories sorting={sorting} setSorting={setSorting} /> */}
      <CardContainer className="project-container">
        <ProjectSorting projectList={projectList} sorting="project" />
      </CardContainer>
    </MainContainer>
  );
};

export default Projects;
