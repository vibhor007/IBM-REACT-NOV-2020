import cartApi from "../services/cartApi";

function removeFromCart(cartItem) {
  return function (dispatch) {
    cartApi.remove(cartItem).then(() => {
      const action = { type: "DELETE_CART_ITEM", payload: cartItem };
      dispatch(action);
    });
  };
}

export default removeFromCart;
