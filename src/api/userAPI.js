import * as cf from "../commonFunctions";
import c from "../constants";

class UsersAPI {
  static async validateLogin(paramObj) {
    try {
      const response = await cf.getAxiosInstance().post("/api/login", {
        email: paramObj.email,
        password: paramObj.password
      });
      if (response) {
        if (response.data) {
          if (response.data.token) {
            window.localStorage.setItem(
              c.USER_SESSION,
              JSON.stringify(response.data.token)
            );
            return {
              loggedIn: true,
              firstName: "Harshal",
              lastName: "Hirve",
              email: paramObj.email,
              token: response.data.token
            };
          } else {
            throw "Error in login. Please retry.";
          }
        } else {
          throw "Error in login. Please retry.";
        }
      } else {
        throw "Error in login. Please retry.";
      }
    } catch (errObj) {
      throw cf.throwError(errObj);
    }
  }
}

export default UsersAPI;
