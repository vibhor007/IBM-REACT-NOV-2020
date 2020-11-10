import categoryApi from "../services/categoryApi";

const loadCategories = () => {
  return (dispatch) => {
    categoryApi.getAll().then(function (categories) {
      const action = { type: "INIT_CATEGORIES", payload: categories };
      dispatch(action);
    });
  };
};

export default loadCategories;
