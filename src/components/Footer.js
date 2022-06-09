import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer id="footer">
      <ul>
        <li className="social">
          <Link
            to="https://github.com/aanmeba"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </Link>
        </li>
        <li className="social">
          <Link
            to="https://codepen.io/ajun"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-codepen"></i>
          </Link>
        </li>
        <li className="social">
          <Link
            to="https://www.linkedin.com/in/jungah-a-03a013b7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </Link>
        </li>
        <li className="social">
          <Link
            to="https://www.instagram.com/jungtotheah/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-instagram"></i>
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
