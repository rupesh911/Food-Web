import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

// Components
import Menu from './components/Menu/Menu';
import NavBar from './components/NavBar/NavBar';
import PizzaItems from './components/PizzaItems/PizzaItems';
import Cart from './components/Cart/Cart';

const App = () => {
  return (
    <Fragment>
      <NavBar />
      <Switch>
        <Route path="/" component={Menu} exact />
        <Route path="/pizza" component={PizzaItems} exact />
        <Route path="/burger" component={PizzaItems} exact />
        <Route path="/cart" component={Cart} exact />
      </Switch>
    </Fragment>
  );
};

export default App;