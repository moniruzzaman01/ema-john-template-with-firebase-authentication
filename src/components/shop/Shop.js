import React, { useEffect, useState } from "react";
import { addToLocalStorage, getStoredData } from "../../utilities/functions";
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
    //my process to handle first time quantity problem
    console.log("prev", props.quantity);
    if (props.quantity === 0) {
      props.quantity = 1;
    }
    // console.log(props.quantity);
    //--------------------------------
    const newCart = [...cart, props];
    setCart(newCart);
    //add to local storage
    addToLocalStorage(props.id);
  };
  //get data from local storage and pass it to order summary
  useEffect(() => {
    const storedCart = getStoredData();
    const ss = [];
    for (const id in storedCart) {
      const cartedProduct = products.find((product) => product.id === id);
      if (cartedProduct) {
        const quantity = storedCart[id];
        cartedProduct.quantity = quantity;
        // console.log("quantity", quantity);
        ss.push(cartedProduct);
      }
    }
    setCart(ss);
  }, [products]);

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
