import React from "react";
import formatCurrency from "../util";
import { Fade } from "react-awesome-reveal";

const Cart = ({ cartItems, removeFromBasket }) => {
  const itemPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0); // reduce is a js method
  const totalPrice = itemPrice;

  return (
    <>
      <div className="cart-panel">
        <div className="cart-header">
          <div>
            <h3 className="cart-title">Your basket</h3>
            <p className="cart-subtitle">Review your picks before checkout.</p>
          </div>
          <span className="cart-count">{cartItems.length}</span>
        </div>
        {cartItems.length === 0 ? <div className="cart-empty">Your basket is empty.</div> : null}
        <div className="cart-item">
          {cartItems.map((element) => {
            return (
              <Fade direction="right">
                <div key={element.id} className="product-item">
                  <span className="cart-qty" key={`qty-${element.id}-${element.qty}`}>
                    {element.qty} pcs
                  </span>
                  <div className="product-detail">
                    <img src={element.image} alt="" />
                    <h2>{element.title}</h2>
                  </div>
                  <div className="cart-actions">
                    <div className="price">
                      <span>{formatCurrency(element.price)}</span>
                    </div>
                    <div className="remove-item">
                      <button
                        className="remove-icon"
                        type="button"
                        aria-label="Remove from basket"
                        onClick={() => removeFromBasket(element)}
                      >
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M3 6h18" />
                          <path d="M8 6V4h8v2" />
                          <path d="M6 6l1 14h10l1-14" />
                          <path d="M10 11v6" />
                          <path d="M14 11v6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </Fade>
            );
          })}
        </div>
        <div className="total-price">
          <div className="total-text">Total price</div>
          <div className="total">{formatCurrency(totalPrice)}</div>
        </div>
      </div>
    </>
  );
};

export default Cart;
