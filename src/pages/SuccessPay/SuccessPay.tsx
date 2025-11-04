import React from "react";
import styles from "./SuccessPay.module.css";

const SuccessPay: React.FC = () => {
  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>✅ Sikeres fizetés!</h1>
      <p>Köszönjük a vásárlást.</p>
    </div>
  );
};

export default SuccessPay;