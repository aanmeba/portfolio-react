import React from "react";
import { Button } from "./StyledComponents";

export const ProjectCategories = ({ sorting, setSorting }) => {
  const handleClick = (e) => {
    setSorting(e.target.textContent === "project" ? "practice" : "project");
  };
  return <Button onClick={handleClick}>{sorting}</Button>;
};
