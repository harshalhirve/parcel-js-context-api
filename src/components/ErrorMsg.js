import React from "react";
import styles from "../../assets/css/styles.css";

const ErrorMsg = ({ msg }) => {
  return (
    <tr>
      <td align="center" colSpan="2">
        <div className={styles.errorMsg}>{msg}</div>
      </td>
    </tr>
  );
};

export default ErrorMsg;
