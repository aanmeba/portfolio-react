import styled from "styled-components";

const brightNavy = "#2b3173";
const darkNavy = "#272c34";
const highlighter = "#00e65d";
const sansFont =
  '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif';

export const AppContainer = styled.div`
  width: 70vw;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  font-family: ${sansFont};
  color: ${darkNavy};
`;

export const MainContainer = styled.div`
  margin-top: 5rem;
`;

export const ExtraHeading = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 3rem;
  color: ${brightNavy};
`;

export const Heading = styled.h1`
  font-size: 2rem;
  font-weight: 400;
  line-height: 3rem;
`;

export const HeadingFour = styled.h4`
  margin: 0;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 3rem;
`;

export const Navbar = styled.div`
  list-style-type: none;
  display: flex;
  justify-content: flex-end;
  padding: 0;
  margin-top: 2rem;
`;

export const Highlighter = styled.span`
  border-bottom: 7px solid ${highlighter};
`;

export const FlexUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
`;

export const IconEl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: auto;
  justify-content: flex-start;
  padding-right: 0.5rem;
  color: ${darkNavy};
`;

export const PaddingRight = styled.p`
  padding-right: 5px;
`;

export const CardContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-template-rows: auto;
  gap: 3rem 1.5rem;
  justify-items: center;
  height: 100%;
  margin-bottom: 10rem;
`;

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: flex-start;
  border-bottom: 7px solid ${highlighter};
  width: 350px;
  height: auto;
  padding: 0.5rem 0.5rem 1rem;
  box-sizing: border-box;
`;

export const CardText = styled.div`
  padding-left: 0.5rem;
`;

export const UlWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  padding: 0;
  margin: 0;
`;

export const Ul = styled.div`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  align-items: center;
  flex-wrap: wrap;
`;

export const Li = styled.p`
  margin-right: 10px;
  text-align: center;
  margin: 0 10px 0 0;
`;

export const BottomMargin = styled.div`
  margin-bottom: 5rem;
`;
