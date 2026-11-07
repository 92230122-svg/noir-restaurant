
import {
  createContext,
  useContext,
  useState,
  useMemo,
  useCallback,
} from 'react';

// Create Cart Context
const CartContext = createContext(null);

// Cart Provider
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add product to cart
  const addToCart = useCallback((product) => {
    setCartItems((currentItems) => {
      const existingItem = currentItems.find(
        (item) => item.id === product.id
      );

      if (existingItem) {
        return currentItems.map((item) =>
          item.id === product.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        );
      }

      return [
        ...currentItems,
        {
          ...product,
          quantity: 1,
        },
      ];
    });
  }, []);

  // Remove product from cart
  const removeFromCart = useCallback((productId) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id !== productId)
    );
  }, []);

  // Update product quantity
  const updateQuantity = useCallback((productId, quantity) => {
    if (quantity <= 0) {
      setCartItems((currentItems) =>
        currentItems.filter((item) => item.id !== productId)
      );
      return;
    }

    setCartItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId
          ? { ...item, quantity }
          : item
      )
    );
  }, []);

  // Clear entire cart
  const clearCart = useCallback(() => {
    setCartItems([]);
  }, []);

  // Calculate total quantity
  const cartCount = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + item.quantity,
      0
    );
  }, [cartItems]);

  // Calculate total price
  const cartTotal = useMemo(() => {
    return cartItems.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0
    );
  }, [cartItems]);

  // Context value
  const value = useMemo(
    () => ({
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }),
    [
      cartItems,
      cartCount,
      cartTotal,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook
export function useCart() {
  const context = useContext(CartContext);

  if (context === null) {
    throw new Error(
      'useCart must be used inside CartProvider'
    );
  }

  return context;
}

export default CartContext;
