import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Welcome to the React App</h1>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route exact path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
