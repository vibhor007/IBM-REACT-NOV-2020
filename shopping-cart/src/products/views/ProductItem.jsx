import React from "react";

const ProductItem = ({ product, toggleOutOfStock, remove, addToCart }) => {
  const { name, description, price, isOutOfStock, category } = product;
  return (
    <li>
      <span className={"name " + (isOutOfStock ? "outofstock" : "")}>
        {name}
      </span>
      <span> {category} </span>
      <div>{description}</div>
      <div className="price">Rs.{price}</div>
      <input
        type="checkbox"
        checked={isOutOfStock}
        onChange={() => toggleOutOfStock(product)}
      />
      <label htmlFor="">Out of Stock</label>
      <br />
      <input
        type="button"
        value="Add to cart"
        onClick={() => addToCart(product)}
      />
      <input type="button" value="Remove" onClick={() => remove(product)} />
    </li>
  );
};

export default ProductItem;
