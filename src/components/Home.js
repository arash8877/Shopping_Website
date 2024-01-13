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
      setItem(
        data.products.filter(
          (element) => element.availableBrand.indexOf(selected) >= 0
        )
      );
    }
  };

  const addToBasket = (product) => {
    const exist = cartItems.find((element) => element.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((element) =>
          element.id === product.id ? { ...exist, qty: exist.qty + 1 } : element
        )
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
          element.id === product.id ? { ...exist, qty: exist.qty - 1 } : element
        )
      );
    }
  };

  return (
    <div>
      <div className="container">
        <header>
          <a href="">Arash Web Shop</a>
        </header>
        <main>
          <div className="content">
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
