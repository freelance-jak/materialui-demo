import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";
import Shift from "./screens/Shift";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/shift" component={Shift} />
    </div>
  </BrowserRouter>
);

export default App;
