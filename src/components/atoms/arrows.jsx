import {
  ArrowLeftAlign,
  ArrowLeftUI,
  ArrowRightAlign,
  ArrowRightUI,
  Slider,
} from "../StyledComponents";

const Arrows = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("clicked!");
  };
  return (
    <Slider>
      <ArrowRightAlign>
        <ArrowRightUI
          onClick={handleClick}
          className="arrow arrow-right"
        ></ArrowRightUI>
      </ArrowRightAlign>
      <ArrowLeftAlign>
        <ArrowLeftUI
          onClick={handleClick}
          className="arrow arrow-left"
        ></ArrowLeftUI>
      </ArrowLeftAlign>
    </Slider>
  );
};

export default Arrows;
