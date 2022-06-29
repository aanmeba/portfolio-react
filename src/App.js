import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import { AppContainer } from "./components/StyledComponents";
import Navigation from "./components/Navigation";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <AppContainer>
      <Router>
        {/* <Header /> */}
        <Navigation />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
