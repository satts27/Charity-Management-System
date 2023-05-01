import React from "react";
import styles from "../styles/Add.module.css";
const DonateButton = ({ setClose }) => {
  return (
    <div onClick={() => setClose(false)} className={styles.mainAddButton}>
      Contact Us Now
    </div>
  );
};

export default DonateButton;
