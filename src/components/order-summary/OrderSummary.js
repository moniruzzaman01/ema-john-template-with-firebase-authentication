import React from "react";
import "./OrderSummary.css";

function OrderSummary(props) {
  const { cart } = props;
  // console.log(cart);
  // const getQuantity = (prev, current) => prev + current.quantity;
  // const quantity = cart.reduce(getQuantity, 0);
  // const getTotalPrice = (prev, current) => prev + current.price;
  // const getShippedPrice = (prev, current) => prev + current.shipping;
  // const total = cart.reduce(getTotalPrice, 0);
  // const shippingFee = cart.reduce(getShippedPrice, 0);
  let total = 0;
  let shippingFee = 0;
  let quantity = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * quantity;
    shippingFee = shippingFee + product.shipping;
  }
  const tax = total * 0.1;
  const grandTotal = total + shippingFee + tax;
  return (
    <div className="order-summary">
      <div className="order">
        <h2>Order Summary</h2>
        <p>Added Product : {quantity}</p>
        <p>Total Price :{total}</p>
        <p>Shipping Charge :{shippingFee} </p>
        <p>Tax :{tax.toFixed(2)} </p>
        <h3>Grand Total :{grandTotal.toFixed(2)} </h3>
      </div>
    </div>
  );
}

export default OrderSummary;
