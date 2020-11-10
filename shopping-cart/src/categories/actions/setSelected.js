const setSelected = (category) => {
  const action = { type: "SET_SELECTED_CATEGORY", payload: category };
  return action;
};

export default setSelected;
