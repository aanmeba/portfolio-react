import { Link } from "react-router-dom";
import { Heading, MainContainer, ExtraHeading } from "./StyledComponents";

const NotFound = () => {
  return (
    <MainContainer>
      <ExtraHeading>Not Found</ExtraHeading>
      <Heading>Sorry, the page you are looking for is not found</Heading>
      <Link to="/">Go back to home page</Link>
    </MainContainer>
  );
};

export default NotFound;
