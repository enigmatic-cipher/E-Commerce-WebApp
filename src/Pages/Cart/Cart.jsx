import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { PRODUCTS } from "../../Products";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {
  const { cartItems, getTotalCartAmount, checkout } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  const navigate = useNavigate();
  return (
    <div className="cart">
      <div>
        <h1>Your Cart Item</h1>
      </div>
      <div className="cartItems">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <h2> Subtotal: ₹ {totalAmount} </h2>
          <button onClick={() => navigate("/")}> Continue Shopping </button>
          <button
            onClick={() => {
              checkout();
              navigate("/checkout");
            }}
          >
            {" "}
            Checkout{" "}
          </button>
        </div>
      ) : (
        <h1> Your Shopping Cart is Empty</h1>
      )}
    </div>
  );
}

export default Cart;
