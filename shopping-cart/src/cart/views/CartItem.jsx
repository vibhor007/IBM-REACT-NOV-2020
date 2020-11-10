import React from "react";



const CartItem = ({ item, remove }) => {
  const { name, category, quantity, price, totalPrice } = item;
  return (
    <tr>
      <td>{name}</td>
      <td>{category}</td>
      <td>{quantity}</td>
      <td>{price}</td>
      <td>{totalPrice}</td>
      <td>
        <input type="button" value="Remove" onClick={() => remove(item)} />
      </td>
    </tr>
  );
};

export default CartItem;
