import { NavLink } from "react-router-dom";
import Navigation from "./navigation";

const Header = () => {
  return (
    <header>
      <section className="header-title">
        <NavLink exact to="/">
          {/* <p className="header-title-1">
            Experimental
            <br />
            playground
          </p> */}
          {/* <p className="header-title-2">Jungah</p> */}
        </NavLink>
      </section>
      <Navigation className="navbar" />
    </header>
  );
};

export default Header;
