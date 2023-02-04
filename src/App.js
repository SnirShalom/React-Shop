import "./App.css";
import { useEffect, useState } from "react";
import { ProductsList } from "./ProductsList";
function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const addToCartHandler = (product, i) => {
    const productInCart = cart.find((cartItem) => cartItem.id === product.id);
    if (!productInCart) {
      const newProduct = { ...product, quantity: 1 };
      const newCart = [...cart, newProduct];

      setCart(newCart);
      // const newCart = [...cart, product];
      // console.log(newCart);
      // newCart.quantity = 1;
      // setCart(newCart);
    } else {
      const newCart = [...cart];
      const productInNewCart = newCart.find(
        (cartItem) => cartItem.id === product.id
      );
      productInNewCart.quantity++;
      console.log(productInNewCart.quantity);

      setCart(newCart);
    }
  };

  const removeSingle = (i) => {
    const newCart = [...cart];
    if (newCart[i].quantity > 1) {
      newCart[i].quantity -= 1;
    } else {
      newCart.splice(i, 1);
    }
    setCart(newCart);
  };

  return (
    <div className="App">
      {cart.map((cartItem, i) => (
        <div>
          {cartItem.title} {cartItem.quantity}
          {!cartItem.quantity ? (
            ""
          ) : (
            <button
              onClick={() => {
                removeSingle(i);
              }}
            >
              Remove Single
            </button>
          )}
        </div>
      ))}
      <div>{products.length === 0 ? "loading.." : null}</div>
      <ProductsList products={products} addToCartHandler={addToCartHandler} />
    </div>
  );
}

export default App;
