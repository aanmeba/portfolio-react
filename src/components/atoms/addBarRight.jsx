import { DisplayFlex, Li } from "../StyledComponents";

const AddBarRight = (list) => {
  return (
    <>
      {list.map((item, index) =>
        index !== list.length - 1 ? (
          <DisplayFlex key={index}>
            <Li>{item}</Li>
            <Li>|</Li>
          </DisplayFlex>
        ) : (
          <Li key={index}>{item}</Li>
        )
      )}
    </>
  );
};

export default AddBarRight;
