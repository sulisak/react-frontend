// AppRouter.jsx
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import CreateProduct from "./CreateProduct";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/create-product" component={CreateProduct} />
      </Switch>
    </Router>
  );
};

export default AppRouter;