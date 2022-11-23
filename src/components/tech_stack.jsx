import { FlexUl, Li } from "./StyledComponents";

const TechStack = () => {
  const stackList = require("../data/tech_stack.json");
  return (
    <>
      <FlexUl>
        {stackList.map((stack, index) =>
          index !== stackList.length - 1 ? (
            <>
              <Li key={index}>{stack}</Li>
              <Li>|</Li>
            </>
          ) : (
            <Li key={index}>{stack}</Li>
          )
        )}
      </FlexUl>
    </>
  );
};

export default TechStack;
