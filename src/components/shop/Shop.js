import React, { useEffect, useState } from "react";
import OrderSummary from "../order-summary/OrderSummary";
import Product from "../product/Product";
import "./Shop.css";

function Shop() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const [cart, setCart] = useState([]);
  const btnClickHandle = (props) => {
    const newCart = [...cart, props];
    setCart(newCart);
  };
  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product, key) => (
          <Product
            key={key}
            product={product}
            btnClickHandle={btnClickHandle}
          ></Product>
        ))}
      </div>
      <div className="cart-container">
        <OrderSummary cart={cart}></OrderSummary>
      </div>
    </div>
  );
}

export default Shop;
