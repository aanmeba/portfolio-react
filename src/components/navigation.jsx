import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Navbar, Highlighter, FixedHeader } from "./StyledComponents";

const Navigation = ({ className }) => {
  const location = useLocation();
  const [userLocation, setUserLocation] = useState("");

  const checkLocation = () => {
    setUserLocation(location);
  };

  useEffect(() => {
    // checkLocation();
    setUserLocation(location);
  }, [location]);

  return (
    <FixedHeader className={className}>
      <Navbar>
        {userLocation.pathname === "/" ? (
          <NavLink
            to="/projects"
            onClick={checkLocation}
            style={{ textDecoration: "none" }}
          >
            <Highlighter>Projects</Highlighter>
          </NavLink>
        ) : (
          <NavLink
            to="/"
            onClick={checkLocation}
            style={{ textDecoration: "none" }}
          >
            <Highlighter>Home</Highlighter>
          </NavLink>
        )}
      </Navbar>
    </FixedHeader>
  );
};

export default Navigation;
