import React from "react";
import { Switch, Route } from "react-router-dom";
import { connect } from "react-redux";
import LoginPage from "../components/login/LoginPage";

class Root extends React.Component {
  render() {
    return (
      <table
        border="0"
        cellPadding="0"
        cellSpacing="0"
        width="95%"
        align="center"
      >
        <tbody>
          <tr>
            <td>
              <Switch>
                <Route exact path="/" component={LoginPage} />
              </Switch>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

function mapStateToProps(state) {
  const loading = state.loading;
  const { loggedIn } = state.user;
  return {
    loggedIn,
    loading
  };
}

export default connect(mapStateToProps)(Root);
