import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import categoryActionCreators from "./actions";
import CategoryEditor from "./views/CategoryEditor";
import CategoryList from "./views/CategoryList";

const Categories = ({
  loadCategories,
  data,
  selected,
  setSelected,
  addNewCategory,
}) => {
  useEffect(loadCategories, [loadCategories]);
  return (
    <div className="marginWrapper">
      <CategoryEditor addNew={addNewCategory} />
      <CategoryList
        categories={data}
        setSelected={setSelected}
        selected={selected}
      />
    </div>
  );
};

function mapStateToProps(storeState) {
  const categories = storeState.categories.categoryList,
    selected = storeState.categories.selectedCategory;
  return { data: categories, selected: selected };
}

function mapDispatchToProps(dispatch) {
  const categoryActionDispatchers = bindActionCreators(
    categoryActionCreators,
    dispatch
  );
  return categoryActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
