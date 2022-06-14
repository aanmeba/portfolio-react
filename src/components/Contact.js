import { FooterContainer, IconEl, PaddingRight } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";

const contactDetail = require("../data/contact.json");

const Contact = () => {
  return (
    <section>
      <FooterContainer>
        {contactDetail.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconEl>
                <PaddingRight>
                  {item.name === "Github" ? (
                    <FontAwesomeIcon icon={faGithub} />
                  ) : null}
                  {item.name === "LinkedIn" ? (
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  ) : null}
                  {item.name === "Email" ? (
                    <FontAwesomeIcon icon={faEnvelope} />
                  ) : null}
                  {item.name === "Resume" ? (
                    <FontAwesomeIcon icon={faFile} />
                  ) : null}
                </PaddingRight>
                <PaddingRight>{item.name}</PaddingRight>
              </IconEl>
            </a>
          </li>
        ))}
      </FooterContainer>
    </section>
  );
};

export default Contact;
