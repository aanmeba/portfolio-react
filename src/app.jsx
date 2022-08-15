import Home from "./pages/home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/projects";
import { AppContainer } from "./components/StyledComponents";
import Navigation from "./components/navigation";
import NotFound from "./components/not_found";

const App = ({ strava }) => {
  return (
    <AppContainer>
      <Router>
        {/* <Header /> */}
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home strava={strava} />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
