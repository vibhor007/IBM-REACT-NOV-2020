const initialState = {
  cartList: [],
  total: 0,
};

function cartReducer(currentState = initialState, action) {
  if (action.type === "ADD_CART_ITEM")
    return {
      ...currentState,
      cartList: [...currentState.cartList, action.payload],
    };
  if (action.type === "UPDATE_CART_ITEM") {
    const newCartList = currentState.cartList.map((el) =>
      el.id === action.payload.id ? action.payload : el
    );
    return {
      ...currentState,
      cartList: newCartList,
    };
  }
  if (action.type === "DELETE_CART_ITEM") {
    const newCartList = currentState.cartList.filter(
      (el) => el.id !== action.payload.id
    );
    const newTotal = newCartList.reduce(
      (acc, item) => +item.totalPrice + acc,
      0
    );
    return {
      ...currentState,
      total: newTotal,
      cartList: newCartList,
    };
  }
  if (action.type === "INIT_CARTITEMS") {
    return action.payload;
  }
  return currentState;
}

export default cartReducer;
