import React from "react";
import { LoginConsumer } from "../../providers/LoginProvider";
import styles from "../../../assets/css/styles.css";
import TextBox from "../../components/TextBox";
import Button from "../../components/Button";
import ErrorMsg from "../../components/ErrorMsg";

const LoginForm = () => {
  console.log("LoginForm rendered...");
  console.log("-END----------------------------\n\n");
  return (
    <LoginConsumer>
      {context => (
        <form name="form1" onSubmit={context.handleSubmit}>
        {context.state.count}
          <table border="0" className={styles.tableBox} align="center">
            <tbody>
              {context.error && <ErrorMsg msg={context.error} />}
              <tr>
                <td>Email</td>
                <td>
                  <TextBox
                    type="email"
                    name="email"
                    value={context.state.email}
                    maxLength="200"
                    className={
                      context.state.emailErr
                        ? styles.textBoxErr
                        : styles.textBox
                    }
                    onChange={context.handleChange}
                    required={false}
                  />
                </td>
              </tr>
              <tr>
                <td>Password</td>
                <td>
                  <TextBox
                    type="password"
                    name="password"
                    value={context.state.password}
                    maxLength="20"
                    className={
                      context.state.passwordErr
                        ? styles.textBoxErr
                        : styles.textBox
                    }
                    onChange={context.handleChange}
                    required={false}
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2" align="center">
                  <Button
                    type="submit"
                    name="submit"
                    value={context.loading ? "Processing..." : "Login"}
                    className={styles.button}
                    disabled={context.loading}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      )}
    </LoginConsumer>
  );
};

export default LoginForm;
