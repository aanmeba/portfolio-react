import { FlexUl } from "./StyledComponents";
import addBarRight from "./atoms/addBarRight";

const TechStack = () => {
  const stackList = require("../data/tech_stack.json");
  return (
    <>
      <FlexUl>{addBarRight(stackList)}</FlexUl>
    </>
  );
};

export default TechStack;
