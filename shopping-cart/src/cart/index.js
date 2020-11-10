import React, { useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import cartActionCreators from "./actions";
import CartList from "./views/CartList";
import CartTotal from "./views/CartTotal";
const Cart = ({ data, total, removeFromCart, loadCart }) => {
  useEffect(loadCart, [loadCart]);
  return (
    <div>
      <CartTotal total={total} />
      <CartList cartItems={data} remove={removeFromCart} />
    </div>
  );
};

function mapStateToProps(storeState) {
  const cartList = storeState.cart.cartList,
    total = storeState.cart.total;
  return { data: cartList, total: total };
}

function mapDispatchToProps(dispatch) {
  const categoryActionDispatchers = bindActionCreators(
    cartActionCreators,
    dispatch
  );
  return categoryActionDispatchers;
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
