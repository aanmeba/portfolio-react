import React from "react";
import { Button, Highlighter, SubNavbar } from "./StyledComponents";

export const ProjectCategories = ({
  sorting,
  setSorting,
  hoveredChild,
  handleHover,
}) => {
  const handleClick = (e) => {
    const sortingToLowerCase = e.target.textContent.toLowerCase();
    setSorting(sortingToLowerCase === "all" ? null : sortingToLowerCase);
  };

  const categories = ["All", "Project", "Practice", "Open Source"];

  return (
    <SubNavbar>
      {categories.map((cat) => (
        <Button
          key={cat}
          onClick={handleClick}
          isHovered={hoveredChild === cat}
          onMouseEnter={() => handleHover(cat)}
          onMouseLeave={() => handleHover(null)}
        >
          {!sorting && cat === "All" ? (
            <Highlighter>{cat}</Highlighter>
          ) : cat.toLocaleLowerCase() === sorting ? (
            <Highlighter>{cat}</Highlighter>
          ) : (
            <>{cat}</>
          )}
        </Button>
      ))}
    </SubNavbar>
  );
};
