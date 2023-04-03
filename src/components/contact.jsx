import { FlexUl, IconEl, PaddingRight } from "./StyledComponents";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Resume from "../file/Jungah-Resume.pdf";

const contactDetail = require("../data/contact.json");

const Contact = () => {
  const iconList = [faGithub, faLinkedinIn, faEnvelope, faFile];

  return (
    <section>
      <FlexUl>
        {contactDetail.map((item, i) => (
          <li key={item.id}>
            <a
              href={item.name === "Resume" ? Resume : item.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <IconEl>
                <PaddingRight>
                  <FontAwesomeIcon icon={iconList[i]} />
                </PaddingRight>
                <PaddingRight>{item.name}</PaddingRight>
              </IconEl>
            </a>
          </li>
        ))}
      </FlexUl>
    </section>
  );
};

export default Contact;
