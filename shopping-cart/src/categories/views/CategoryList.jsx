import React from "react";
import CategoryItem from "./CategoryItem";

const CategoryList = ({ categories, setSelected, selected }) => {
  const list = categories.map((category) => (
    <CategoryItem
      key={category.id}
      category={category}
      setSelected={setSelected}
      selected={selected}
    />
  ));
  return (
    <section className="list">
      <ol>{list}</ol>
    </section>
  );
};

export default CategoryList;
