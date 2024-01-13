import React from "react";
import formatCurrency from "../util";
import { Fade } from "react-awesome-reveal";

const Cart = ({ cartItems, removeFromBasket }) => {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0); // reduce is a js method
  const totalPrice = itemPrice;

  return (
    <>
      {cartItems.length === 0 ? (
        <div className="empty-price">Basket is empty</div>
      ) : (
        <div className="show-price">
          Yoy have {cartItems.length} items in the basket
        </div>
      )}
      <div className="cart-item">
        {cartItems.map((element) => {
          return (
            <Fade direction="right">
              <div key={element.id} className="product-item">
                <div className="product-detail">
                  <img src={element.image} alt="" />
                  <h2>{element.title}</h2>
                </div>
                <div className="product-price">
                  <div className="price">
                    <span>{formatCurrency(element.price)}</span>
                    <span className="qty">{element.qty} pcs</span>
                  </div>
                  <div className="remove-item">
                    <button onClick={() => removeFromBasket(element)}>
                      Remove from basket
                    </button>
                  </div>
                </div>
              </div>
            </Fade>
          );
        })}
      </div>
      <div className="total-price">
        <div className="total-text">Total price:</div>
        <div className="total">{formatCurrency(totalPrice)}</div>
      </div>
    </>
  );
};

export default Cart;
