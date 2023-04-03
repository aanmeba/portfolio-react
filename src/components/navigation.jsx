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
    setUserLocation(location);
  }, [location]);

  const linkText = userLocation.pathname === "/" ? "Projects" : "Home";
  const linkTo = userLocation.pathname === "/" ? "/projects" : "/";

  return (
    <FixedHeader className={className}>
      <Navbar>
        <NavLink
          to={linkTo}
          onClick={checkLocation}
          style={{ textDecoration: "none" }}
        >
          <Highlighter>{linkText}</Highlighter>
        </NavLink>
      </Navbar>
    </FixedHeader>
  );
};

export default Navigation;
