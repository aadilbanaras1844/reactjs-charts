
import React from "react";
import './App.css';
import Menu from "./Menu";
import BarCharts from './components/bar-charts';
import LineCharts from "./components/line-charts";
import TreeCharts from "./components/tree-charts";
import ThreeDCharts from "./components/3d-charts";

import {
  BrowserRouter as Router,
  Switch,
  Redirect,
  Route
} from "react-router-dom";

export default function BasicExample() {
  return (
    <Router>
      <div>
          <Route path="/" component={Menu} />
          <div className="container-fluid mt-2">
            <Switch>
              <Route path="/bar" component={BarCharts} />
              <Route path="/line" component={LineCharts} />
              <Route path="/tree" component={TreeCharts} />
              <Route path="/3d" component={ThreeDCharts} />

              <Redirect from="/" to="/bar" />
            </Switch>
          </div>
        </div>
    </Router>
  );
}

