import React, { Component } from "react";
import LoginProvider from "../../providers/LoginProvider";
import Step1 from "../Step1";

class Login extends Component {
  render() {
    console.log("--START---------------------------");
    console.log("Login rendered...");
    return (
      <LoginProvider>
        <Step1 />
      </LoginProvider>
    );
  }
}

export default Login;
