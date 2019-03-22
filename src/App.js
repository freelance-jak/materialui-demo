import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Login from "./screens/Login";
import Dashboard from "./screens/Dashboard";

const App = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/dashboard" component={Dashboard} />
    </div>
  </BrowserRouter>
);

export default App;
