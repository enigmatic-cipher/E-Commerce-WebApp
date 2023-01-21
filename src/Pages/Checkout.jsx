import React from "react";
import checkout from "../Assets/checkout.gif";

function Checkout() {
  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      <h1>Thank You For Shopping With Us</h1>
      <img src={checkout} alt="checkout" />
    </div>
  );
}

export default Checkout;
