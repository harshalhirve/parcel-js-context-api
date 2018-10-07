import React, { Component } from "react";
import Step2 from "./Step2";

class Step1 extends Component {
  render() {
    console.log("Step1 rendered...");
    return <Step2 />;
  }
}

export default Step1;
