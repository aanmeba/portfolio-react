import { NavLink } from "react-router-dom";

const Navigation = ({ className }) => {
  return (
    <nav className={className}>
      <ul>
        <li>
          <NavLink to="./about">about</NavLink>
        </li>
        <li>
          <NavLink to="./projects">projects</NavLink>
        </li>
        {/* <li>
          <NavLink to="./lab">lab</NavLink>
        </li>
        <li>
          <NavLink to="./blog">blog</NavLink>
        </li> */}
      </ul>
    </nav>
  );
};

export default Navigation;
