import React from "react";
import "./ProductList.css";
import Product from "../product/Product";
import { products } from "../../data";

function ProductList() {
  return (
    <div className="pl">
      <div className="pl-text">
        <h1 className="pl-title">Create & inspire</h1>
        <p className="pl-desc">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo aliquid
          aspernatur aperiam mollitia accusamus, neque recusandae, quis
          voluptates qui ratione quibusdam cum pariatur odit molestiae
          laudantium, corrupti laborum maxime. Numquam!
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link}/>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
