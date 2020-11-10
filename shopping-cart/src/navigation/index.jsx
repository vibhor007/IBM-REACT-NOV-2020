import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Navigation = ({ count }) => {
  return (
    <>
      <h1>My App</h1>
      <div>
        <span>
          [ <Link to="/">Home</Link> ]
        </span>
        <span>
          [ <Link to="/categories">Categories</Link> ]
        </span>
        <span>
          [ <Link to="/products">Products</Link> ]
        </span>
        <span>
          [ <Link to="/cart">Cart[{count}]</Link> ]
        </span>
      </div>
      <hr />{" "}
    </>
  );
};
const mapStateToProps = ({ cart }) => {
  const itemCount = cart.cartList.reduce((acc, item) => item.quantity + acc, 0);
  return {
    count: itemCount,
  };
};

export default connect(mapStateToProps, null)(Navigation);
