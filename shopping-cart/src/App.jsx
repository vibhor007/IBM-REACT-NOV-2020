import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import store from "./store";
import Products from "./products";
import Categories from "./categories";
import Navigation from "./navigation";
import Home from "./home";
import Cart from "./cart";


const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Navigation />
        <Switch>
          <Route path="/categories" component={Categories} />
          <Route path="/products" component={Products} />
          <Route path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
        </Switch>
      </Provider>
    </Router>
  );
};

export default App;
