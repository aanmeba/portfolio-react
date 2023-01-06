import { DisplayFlex, FlexUl, Li } from "./StyledComponents";

const TechStack = () => {
  const stackList = require("../data/tech_stack.json");
  return (
    <>
      <FlexUl>
        {stackList.map((stack, index) =>
          index !== stackList.length - 1 ? (
            <DisplayFlex key={index}>
              <Li>{stack}</Li>
              <Li>|</Li>
            </DisplayFlex>
          ) : (
            <Li key={index}>{stack}</Li>
          )
        )}
      </FlexUl>
    </>
  );
};

export default TechStack;
