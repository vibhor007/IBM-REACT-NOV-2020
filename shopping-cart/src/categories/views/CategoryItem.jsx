import React from "react";

const CategoryName = ({ category, setSelected, selected }) => {
  const { name } = category;
  return (
    <li
      onClick={() => setSelected(name)}
      className={name === selected ? "selected" : ""}
    >
      {category.name}
    </li>
  );
};

export default CategoryName;
