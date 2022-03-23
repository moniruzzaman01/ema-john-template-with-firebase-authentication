import React from "react";
import "./OrderSummary.css";

function OrderSummary(props) {
  console.log(props.cart[0]);
  const add = (prev, current) => prev + current.price;
  return (
    <div className="order-summary">
      <div className="order">
        <h2>Order Summary</h2>
        <p>Added Product : {props.cart.length}</p>
        <p>Total Price :{props.cart.reduce(add, 0)}</p>
        <p>Total Shipping Charge : </p>
        <p>Tax : </p>
        <h3>Grand Total : </h3>
      </div>
    </div>
  );
}

export default OrderSummary;
