import { createContext, useState } from 'react';

const CartContext = createContext([]);

export const CartProvider = ({ children }) => {
  const [itemsCart, setItemsCart] = useState([]);

  const addItems = (items) => {
    setItemsCart([...itemsCart, { ...items }]);
  };

  const clearCart = () => {
    setItemsCart([]);
  };

  return (
    <CartContext.Provider value={{ itemsCart, addItems, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContext;