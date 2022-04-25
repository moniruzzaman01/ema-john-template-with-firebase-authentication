import React from "react";
import "./OrderSummary.css";

function OrderSummary() {
  return (
    <div className="order-summary">
      <div className="order">
        <h2>Order Summary</h2>
        <p>Added Product : </p>
        <p>Total Price :</p>
        <p>Shipping Charge : </p>
        <p>Tax : </p>
        <h3>Grand Total : </h3>
      </div>
    </div>
  );
}

export default OrderSummary;
