import React from "react";
import CartItem from "./CartItem";
import CartListHeader from "./CartListHeader";

const CartList = ({ cartItems, remove }) => {
  const list = cartItems.map((cartItem) => (
    <CartItem key={cartItem.id} item={cartItem} remove={remove} />
  ));
  return (
    <table>
      <CartListHeader />
      <tbody>{list}</tbody>
    </table>
  );
};

export default CartList;
