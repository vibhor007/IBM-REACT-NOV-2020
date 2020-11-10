import React, { useEffect } from "react";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import ProductStats from "./views/ProductStats";
import ProductEditor from "./views/ProductEditor";
import ProductsList from "./views/ProductsList";
import productActionCreators from "./actions";
import cartActionCreator from "../cart/actions";
const Products = ({
  data,
  categories,
  toggleOutOfStock,
  removeProduct,
  removeOutOfStock,
  addNewProduct,
  loadProducts,
  addToCart,
}) => {
  useEffect(loadProducts, [loadProducts]);
  return (
    <div className="marginWrapper">
      <ProductStats products={data} />
      <ProductEditor addNew={addNewProduct} categories={categories} />
      <ProductsList
        products={data}
        toggleOutOfStock={toggleOutOfStock}
        remove={removeProduct}
        removeOutOfStock={removeOutOfStock}
        addToCart={addToCart}
      />
    </div>
  );
};

const mapStateToProps = ({ products, categories }) => {
  const selectedCatgory = categories.selectedCategory;
  if (selectedCatgory !== "")
    return {
      data: products.filter((p) => p.category === selectedCatgory),
      categories: categories.categoryList,
    };
  return { data: products, categories: categories.categoryList };
};

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    Object.assign({}, productActionCreators, cartActionCreator),
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Products);
