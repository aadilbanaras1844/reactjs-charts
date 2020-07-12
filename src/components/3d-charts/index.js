import React from "react";
import { NavLink, Route } from "react-router-dom";
import Force3d1 from "./force-3d-1";
import Force3dGeometries from "./force-3d-node-geometries";
import Force3dD3 from "./force-3d-d3";

export default class ThreeDCharts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    const { match } = this.props;

    return (
      <div className="row">
        <div className="col-3">
          <div className="list-group">
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force1`}>
              Force 3D 1
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-geometries`}>
              3D nodes geometries
            </NavLink>
            <NavLink activeClassName="active" className="list-group-item list-group-item-action" to={`${match.url}/force-d3`}>
              3D D3 parameters
            </NavLink>
          </div>
        </div>

        <div className="col-9 3d-charts-container">
          <Route path={`${match.url}/force1`} component={Force3d1} />
          <Route path={`${match.url}/force-geometries`} component={Force3dGeometries} />
          <Route path={`${match.url}/force-d3`} component={Force3dD3} />
        </div>
      </div>
    );
  }
}
