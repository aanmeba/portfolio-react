import React from "react";
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

const newerToOlder = (array) => {
  return array.sort((a, b) => new Date(b.date) - new Date(a.date));
};

export const ProjectSorting = ({ projectList, sorting }) => {
  const filteredList = !sorting
    ? [...projectList]
    : projectList.filter((proj) => proj.category === sorting);

  const sortedProjectList = newerToOlder(filteredList);

  return (
    <>
      {sortedProjectList.map((proj) => (
        <CardBox key={proj.id}>
          <LazyLoad height={"100%"}>
            <img
              key={proj.image}
              src={require(`../img/${proj.image}.png`)}
              alt={proj.title}
              width="100%"
            />
          </LazyLoad>
          <CardText>
            <HeadingFour>{proj.title}</HeadingFour>
            <UlWrapper key={proj.github}>
              <Ul>
                {proj.deployed_link === "" ? null : (
                  <>
                    <Li>
                      <a
                        href={proj.deployed_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Demo
                      </a>
                    </Li>
                    <Li>|</Li>
                  </>
                )}
                <Li>
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </Li>
                {proj.other_link === "" ? null : (
                  <>
                    <Li>|</Li>
                    <Li>
                      <a
                        href={proj.other_link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Slideshow
                      </a>
                    </Li>
                  </>
                )}
              </Ul>
            </UlWrapper>
            <p>{proj.description}</p>
            <UlWrapper key={proj.id + proj.tech_stack.length}>
              <Ul>
                {proj.tech_stack.length === 1 ? (
                  <Li>{proj.tech_stack[0]}</Li>
                ) : (
                  proj.tech_stack.map((lang, index) =>
                    proj.tech_stack.length - 1 !== index ? (
                      <DisplayFlex key={index}>
                        <Li>{lang}</Li>
                        <Li>|</Li>
                      </DisplayFlex>
                    ) : (
                      <Li key={index}>{lang}</Li>
                    )
                  )
                )}
              </Ul>
            </UlWrapper>
          </CardText>
        </CardBox>
      ))}
    </>
  );
};
