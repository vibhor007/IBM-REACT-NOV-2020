import categoryApi from "../services/categoryApi";

const addNewCategory = (categoryName) => {
  return (dispatch) => {
    const newCategoryData = {
      id: 0,
      name: categoryName,
    };

    categoryApi.save(newCategoryData).then((newCategory) => {
      const action = { type: "ADD_CATEGORY", payload: newCategory };
      dispatch(action);
    });
  };
};

export default addNewCategory;
