import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects";
import { AppContainer } from "./components/StyledComponents";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <AppContainer>
      <Router>
        {/* <Header /> */}
        <Navigation />
        <Routes>
          <Route exact path={`${process.env.PUBLIC_URL}/`} element={<Home />} />
          <Route
            path={`${process.env.PUBLIC_URL}/projects`}
            element={<Projects />}
          />
        </Routes>
      </Router>
    </AppContainer>
  );
};

export default App;
