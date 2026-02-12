import React, { useState } from "react";
import Cart from "./Cart";
import Filter from "./Filter";
import Products from "./Products";
import data from "./data.json";

const Home = () => {
  const [item, setItem] = useState(data.products);
  const [sort, setSort] = useState("asc");
  const [brand, setBrand] = useState("");
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const sortProducts = (e) => {
    setSort(e.target.value);
    if (sort === "asc") {
      setItem(data.products.sort((a, b) => (a.id < b.id ? 1 : -1)));
    }
    if (sort === "desc") {
      setItem(data.products.sort((a, b) => (a.id > b.id ? 1 : -1)));
    }
  };

  const filterProduct = (e) => {
    const selected = e.target.value;
    console.log(selected);
    if (selected === "") {
      setBrand(selected);
      setItem(data.products);
    } else {
      setBrand(selected);
      setItem(data.products.filter((element) => element.availableBrand.indexOf(selected) >= 0));
    }
  };

  const addToBasket = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element,
        ),
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  const removeFromBasket = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element,
        ),
      );
    }
  };

  return (
    <div>
      <div className="container">
        <header className="site-header">
          <div className="header-inner second-container">
            <div className="brand-block">
              <a className="brand-link" href="/">
                Arash Web Shop
              </a>
              <span className="brand-tagline">Curated tech that feels effortless to own.</span>
            </div>
            <div className="header-actions">
              <div className="header-pill">Free shipping over DKK 450</div>
            </div>
          </div>
        </header>
        <main>
          <section className="hero second-container">
            <div className="hero-content">
              <div className="eyebrow">
                <span className="eyebrow-label">New season tech</span>
                <span className="eyebrow-line" aria-hidden="true" />
              </div>
              <h1 className="hero-title">
                Modern devices for <span className="hero-accent">every day</span>.
              </h1>
              <p className="hero-subtitle">
                Discover phones that balance design, speed, and battery life. Handpicked to make
                your daily workflow smoother.
              </p>
              <div className="hero-highlights">
                <span>Top picks refreshed weekly</span>
                <span>Verified device quality</span>
                <span>Secure checkout</span>
              </div>
            </div>
            <div className="hero-card">
              <div className="hero-card-title">Todays highlights</div>
              <ul className="hero-list">
                <li>
                  <span>Delivery</span>
                  <span>2-4 days</span>
                </li>
                <li>
                  <span>Support</span>
                  <span>24/7 chat</span>
                </li>
                <li>
                  <span>Warranty</span>
                  <span>2 years</span>
                </li>
              </ul>
            </div>
          </section>
          <div className="content second-container">
            <div className="main">
              <Filter
                count={item.length}
                sortProducts={sortProducts}
                filterProduct={filterProduct}
                brand={brand}
              />
              <Products item={item} addToBasket={addToBasket} />
            </div>
            <div className="sidebar">
              <Cart cartItems={cartItems} removeFromBasket={removeFromBasket} />
            </div>
          </div>
        </main>
        <footer>Designed by Arash</footer>
      </div>
    </div>
  );
};

export default Home;
