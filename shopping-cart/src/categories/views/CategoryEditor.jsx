import React, { useState } from "react";

const ProductEditor = ({ addNew }) => {
  const [name, setName] = useState("");
  const onAddNewClick = () => {
    addNew(name);
  };

  return (
    <section className="edit">
      <div className="field">
        <label>Category Name :</label>
        <input type="text" onChange={(e) => setName(e.target.value)} />
      </div>

      <div className="field">
        <input type="button" value="Add New" onClick={onAddNewClick} />
      </div>
    </section>
  );
};

export default ProductEditor;
