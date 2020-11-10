import productsApi from "../services/productsApi";

function removeProduct(product) {
  return function (dispatch) {
    productsApi.remove(product).then(() => {
      const action = { type: "REMOVE_PRODUCT", payload: product };
      dispatch(action);
    });
  };
}

export default removeProduct;
