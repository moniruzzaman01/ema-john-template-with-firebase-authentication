import React from "react";
import "./Orders.css";
import OrderProduct from "../order-product/OrderProduct";
import OrderSummary from "../order-summary/OrderSummary";

const Orders = () => {
  const ar = [...Array(10).keys()];
  return (
    <div className="orders-container">
      <div className="order-products">
        {ar.map((a, index) => (
          <OrderProduct key={index}></OrderProduct>
        ))}
      </div>
      <div className="order-cart">
        <OrderSummary></OrderSummary>
      </div>
    </div>
  );
};

export default Orders;
