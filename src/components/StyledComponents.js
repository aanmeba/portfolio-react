import styled, { keyframes } from "styled-components";

const brightNavy = "#2b3173";
const darkNavy = "#272c34";
const highlighter = "#00e65d";
const tenpx = "0.6rem";
const eightpx = "0.5rem";
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

export const FixedHeader = styled.nav`
  position: sticky;
  width: 100%;
  top: 0;
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

export const SubNavbar = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3rem;
`;

export const Highlighter = styled.span`
  border-bottom: ${eightpx} solid ${highlighter};
`;

const loadingAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}
`;

export const Spinner = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  border: 3px solid #e8e7e6;
  border-top: 3px solid ${highlighter};
  animation: ${loadingAnimation} 2s linear infinite;
  margin: 0 0.5em;
`;

export const FlexUl = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  font-size: 1rem;
  border: none;
  background-color: #fff;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    color: ${brightNavy};
  }
`;

export const IconEl = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: auto;
  justify-content: flex-start;
  padding-right: ${eightpx};
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
  padding: ${eightpx} ${eightpx} 1rem;
  box-sizing: border-box;
`;

export const CardText = styled.div`
  padding-left: ${eightpx};
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

export const DisplayFlex = styled.div`
  display: flex;
`;

export const Li = styled.p`
  margin-right: ${tenpx};
  text-align: center;
  margin: 0 ${tenpx} 0 0;
  display: flex;
  align-items: flex-end;
`;

export const BottomMargin = styled.div`
  margin-bottom: 5rem;
`;

export const DivClickable = styled.div`
  cursor: pointer;
`;
