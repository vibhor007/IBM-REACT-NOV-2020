import React from "react";
import ProductItem from "./ProductItem";

const ProductsList = ({
  products,
  toggleOutOfStock,
  remove,
  removeOutOfStock,
  addToCart,
}) => {
  const productItems = products.map((product) => (
    <ProductItem
      key={product.id}
      product={product}
      toggleOutOfStock={toggleOutOfStock}
      remove={remove}
      addToCart={addToCart}
    />
  ));
  return (
    <section className="list">
      <ol>{productItems}</ol>
      <input
        type="button"
        value="Remove Out Of Stock"
        onClick={() => removeOutOfStock(products)}
      />
    </section>
  );
};

export default ProductsList;
