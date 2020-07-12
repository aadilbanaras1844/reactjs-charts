import React from "react";
//import * as d3 from "d3";
import ForceGraph3D from "3d-force-graph";
import DATASET_3 from "./data-set-3";

export default class TreeDD3Chart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: DATASET_3()
    };
  }

  componentDidMount() {
    this.graph = ForceGraph3D()(this.chartRef)
      .width(this.chartRef.clientWidth - 100)
      .height(window.innerHeight - 200)
      .backgroundColor("#FFFFFF")
      .nodeColor(d => {
        switch (d.type) {
          case "application":
            return "blue";
          case "environment":
            return "yellow";
          case "microservice":
            return "purple";
          case "K8Container":
            return "green";
          case "K8Pod":
            return "red";
          case "K8Cluster":
            return "black";
          default:
            return "gray";
        }
      })
      .linkWidth(3)
      .linkColor(d => {
        return d.type === "application" ? "#FF0000" : "#000000";
      })
      .graphData(this.state.data);

    this.graph.d3AlphaDecay(0.02);
    this.graph.d3VelocityDecay(0.1);

    this.graph
      .d3Force("link")
      .distance(d => {
        if (
          d.source.type === "application" ||
          d.source.type === "microservice"
        ) {
          return 70;
        }
        return 30;
      })
      .strength(1);

    this.startOrbit();
  }

  startOrbit() {
    const distance = 700;
    let angle = 0;

    this.interval = setInterval(() => {
      angle = angle + Math.PI / 300;
      this.graph.cameraPosition({
        x: distance * Math.sin(angle),
        y: distance * Math.cos(angle)
      });
    }, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return <div className="basic-3d" ref={r => (this.chartRef = r)} />;
  }
}
