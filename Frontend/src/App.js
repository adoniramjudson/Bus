import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import RegisterTravels from "./components/auth/RegisterTravels";
import Login from "./components/auth/Login";
import LoginTravels from "./components/auth/LoginTravels";
import Alert from "./components/layout/Alert";
import PrivateRoute from "./components/routing/PrivateRoute";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import LandingMain from "./components/layout/LandingMain";

window.addEventListener("popstate", (event) => {
  console.log(
    "location: " + document.location + ", state: " + JSON.stringify(event.state)
  );
});
const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <Navbar />
        <Route exact path="/" component={LandingMain} />
        <Alert />
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/registerTravels" component={RegisterTravels} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/loginTravels" component={LoginTravels} />
        </Switch>
        <Switch>
          <PrivateRoute exact path="/landing" component={Landing} />
        </Switch>
      </Fragment>
    </Router>
  </Provider>
);

export default App;
