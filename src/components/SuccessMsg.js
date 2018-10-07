import React from "react";
import styles from "../../assets/css/styles.css";

const SuccessMsg = ({ msg }) => {
  return (
    <tr>
      <td>
        <div className={styles.successMsg}>{msg}</div>
      </td>
    </tr>
  );
};

export default SuccessMsg;
