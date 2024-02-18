import { createContext, useState } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const addItems = (items) => {
    setItemsCart([...itemsCart, { ...items }]);
  };

  return (
    <CartContext.Provider value={{ itemsCart, addItems }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;