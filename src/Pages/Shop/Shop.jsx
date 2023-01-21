import React from "react";
import { PRODUCTS } from "../../Products";
import Product from "./Product";
import "./Shop.css";

function Shop() {
  return (
    <>
      <div className="shop">
        <div className="shopTitle">
          <h1>Mobile E-Shop</h1>
        </div>

        <div className="products">
          {PRODUCTS.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Shop;
