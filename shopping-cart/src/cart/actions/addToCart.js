import cartApi from "../services/cartApi";

const addToCart = (productData) => {
  const { id, name, category, price } = productData;
  return (dispatch, getState) => {
    let currentState = getState();
    let obj = currentState.cart.cartList.find((el) => el.productId === id);
    let newCartData = {};
    if (obj) {
      const newQuantity = +obj.quantity + 1;
      newCartData = {
        ...obj,
        quantity: newQuantity,
        totalPrice: +newQuantity * +obj.price,
      };
    } else {
      newCartData = {
        id: 0,
        productId: id,
        name,
        category,
        quantity: 1,
        price,
        totalPrice: +price,
      };
    }
    cartApi.save(newCartData).then((cartData) => {
      const action = {
        type: obj ? "UPDATE_CART_ITEM" : "ADD_CART_ITEM",
        payload: cartData,
      };
      dispatch(action);
    });
  };
};

export default addToCart;
