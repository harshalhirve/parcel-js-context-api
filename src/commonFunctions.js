import axios from "axios";
import c from "./constants";

export function getAxiosInstance() {
  return axios.create({
    baseURL: c.API_BASE_URL,
    headers: {
      "Content-Type": "application/json"
    }
  });
}

export function getParsedErrObj(error) {
  return JSON.parse(JSON.stringify(error));
}

export function throwError(errObj) {
  const parsedErrObj = this.getParsedErrObj(errObj);
  return {
    errorCode: parsedErrObj.response.status
      ? parsedErrObj.response.status
      : null,
    error: parsedErrObj.response.data.error
      ? parsedErrObj.response.data.error
      : ""
  };
}
