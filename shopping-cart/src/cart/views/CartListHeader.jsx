import React from "react";

const CartListHeader = () => {
  return (
    <thead>
      <tr>
        <th>Product</th>
        <th>Category</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total Price</th>
        <th>Remove</th>
      </tr>
    </thead>
  );
};

export default CartListHeader;
