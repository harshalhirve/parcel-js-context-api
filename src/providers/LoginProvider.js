import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as userActions from "../actions/userActions";
const LoginContext = React.createContext();

class LoginProvider extends Component {
  constructor() {
    super();
    this.state = {
      email: "hh@hh.com",
      emailErr: false,
      password: "password1234",
      passwordErr: false,
      count: 1
    };
    this.handleChange = this.handleChange.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    let { name, value } = e.target;
    this.setState({
      [name]: value,
      ...(name === "email" && { emailErr: false }),
      ...(name === "password" && { passwordErr: false })
    });
  }

  async validateForm() {
    return new Promise(resolve => {
      this.setState(
        {
          emailErr: this.state.email.trim() === "" ? true : false,
          passwordErr: this.state.password.trim() === "" ? true : false
        },
        () => {
          this.state.emailErr || this.state.passwordErr
            ? resolve(false)
            : resolve(true);
        }
      );
    });
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    //NOTE: setting a state in redux, will re-render all components...
    //this.props.clearAllUserMsgs();
    if (await this.validateForm()) {
      await this.props.validateLogin({
        email: this.state.email,
        password: this.state.password
      });
    }

    //NOTE: setting local component state will NOT re-render all components...
    // let count = this.state.count;
    // this.setState({
    //   count: count + 1
    // });
  }

  render() {
    const { loading, error } = this.props;
    return (
      <LoginContext.Provider
        value={{
          state: this.state,
          handleChange: this.handleChange,
          validateForm: this.validateForm,
          handleSubmit: this.handleSubmit,
          loading: loading,
          error: error
        }}
      >
        {this.props.children}
      </LoginContext.Provider>
    );
  }
}

export const LoginConsumer = LoginContext.Consumer;

function mapStateToProps(state) {
  //console.log(state.user);
  return {
    ...state.user,
    loading: state.loading
  };
}

function mapDispatchToProps(dispatch) {
  return {
    ...bindActionCreators(Object.assign({}, userActions), dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginProvider);
