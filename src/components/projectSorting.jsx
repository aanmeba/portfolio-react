import LazyLoad from "react-lazyload";
import {
  CardBox,
  CardText,
  HeadingFour,
  UlWrapper,
  Ul,
  Li,
  DisplayFlex,
} from "./StyledComponents";
import addBarRight from "./atoms/addBarRight";

const newerToOlder = (array) => {
  return array.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const ProjectSorting = ({
  projectList,
  sorting,
  hoveredChild,
  handleHover,
}) => {
  const filteredList = !sorting
    ? [...projectList]
    : projectList.filter((proj) => proj.category === sorting);

  const sortedProjectList = newerToOlder(filteredList);

  const linkValue = (link, str) => {
    return (
      <>
        {link ? (
          <Li>
            <a href={link} target="_blank" rel="noopener noreferrer">
              {str}
            </a>
          </Li>
        ) : null}
      </>
    );
  };
  return (
    <>
      {sortedProjectList.map((proj) => {
        const linkCount = [
          proj.github,
          proj.deployed_link,
          proj.other_link,
        ].filter((link) => link !== "").length;

        return (
          <CardBox
            key={proj.id}
            onMouseEnter={() => handleHover(proj.id)}
            onMouseLeave={() => handleHover(null)}
          >
            <LazyLoad height={"100%"}>
              <img
                key={proj.image}
                src={require(`../img/${proj.image}.png`)}
                alt={proj.title}
                width="100%"
              />
            </LazyLoad>
            <CardText>
              <HeadingFour isHovered={hoveredChild === proj.id}>
                {proj.title}
              </HeadingFour>
              <UlWrapper key={proj.github}>
                <Ul>
                  {linkValue(proj.deployed_link, "Demo")}
                  {proj.deployed_link && linkCount > 1 && <Li>|</Li>}
                  {linkValue(proj.github, "Github")}
                  {proj.other_link && linkCount > 1 && <Li>|</Li>}
                  {linkValue(proj.other_link, "Slideshow")}
                </Ul>
              </UlWrapper>
              <p>{proj.description}</p>
              <UlWrapper key={proj.id + proj.tech_stack.length}>
                <Ul>
                  {proj.tech_stack.length === 1 ? (
                    <Li>{proj.tech_stack[0]}</Li>
                  ) : (
                    addBarRight(proj.tech_stack)
                  )}
                </Ul>
              </UlWrapper>
            </CardText>
          </CardBox>
        );
      })}
    </>
  );
};
