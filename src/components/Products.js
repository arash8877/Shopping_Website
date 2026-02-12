import React from "react";
import formatCurrency from "../util";

const Products = ({ item, addToBasket }) => {
  return (
    <div>
      <ul className="products">
        {item.map((item) => {
          return (
            <li key={item.id}>
              <div className="product">
                <div className="product-media">
                  <img src={item.image} alt="" />
                </div>
                <p className="product-title">{item.title}</p>
                <div className="product-price">
                  <div className="price">{formatCurrency(item.price)}</div>
                  <button className="btn-primary" onClick={() => addToBasket(item)}>
                    Add to basket
                  </button>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;

// if use only "addToBasket(item)", then will consider all of the item.
// if use "()=>addToBasket(item)" then consider only the item has been clicked
