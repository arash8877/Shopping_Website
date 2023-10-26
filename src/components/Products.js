import React from "react";
import formatCurrency from "../util";

const Products = ({ item, addToBasket }) => {
  return (
    <div>
      <ul className="products">
        {
          item.map((item) => {
          return (
            <li key={item.id}>
              <div className="product">
                <img
                  src={item.image}
                  alt=""
                />
                <p>{item.title}</p>
                <div className="product-price">
                  <button onClick={()=>addToBasket(item)}>Add to the basket</button>
                  <div className="price">{formatCurrency(item.price)}</div>
                </div>
              </div>
            </li>
          );
        })
        }
      </ul>
    </div>
  );
};

export default Products;

// if use only "addToBasket(item)", then will consider all of the item.
// if use "()=>addToBasket(item)" then consider only the item has been clicked 
