import removeProduct from "./removeProduct";

function removeOutOfStock(products /* to be fixed */) {
  return function (dispatch) {
    const productsToRemove = products.filter((p) => p.isOutOfStock);
    productsToRemove.forEach((productToRemove) => {
      removeProduct(productToRemove)(dispatch);
    });
  };
}

export default removeOutOfStock;
