import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./components/Store/CartProvider";

function App() {
  const [cartIsVisble, setCartIsVisble] = useState(false);

  const showCartHandler = () => {
    setCartIsVisble(true);
  };

  const hideCartHandler = () => {
    setCartIsVisble(false);
  };
  return (
    <CartProvider>
      {cartIsVisble && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
