import cartApi from "../services/cartApi";

const loadCart = () => {
  return (dispatch) => {
    cartApi.getAll().then(function (cartItems) {
      const total = cartItems.reduce((acc, item) => +item.totalPrice + acc, 0);
      const action = {
        type: "INIT_CARTITEMS",
        payload: { cartList: cartItems, total },
      };
      dispatch(action);
    });
  };
};

export default loadCart;
