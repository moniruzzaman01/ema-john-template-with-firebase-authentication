import React from "react";
import "./OrderProduct.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const OrderProduct = () => {
  return (
    <div className="order-product-container">
      <img src="" alt="" />
      <div className="details">
        <h6>ProductName</h6>
        <p>
          Price: <span>10$</span>
        </p>
        <p>
          ShippingCharge: <span>2$</span>
        </p>
      </div>
      <div className="icon-container">
        <FontAwesomeIcon className="icon" icon={faShoppingCart} />
      </div>
    </div>
  );
};

export default OrderProduct;
