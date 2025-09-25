import React, { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    try {
      const saved = localStorage.getItem('8irestore_cart_v2');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('8irestore_cart_v2', JSON.stringify(cart));
    } catch (e) {
      console.error('Failed to save cart to localStorage:', e);
    }
  }, [cart]);

  const addToCart = (product, quantity = 1, size = null, color = null) => {
    const key = `${product.id}_${size || 'default'}_${color || 'default'}`;
    
    setCart(prev => {
      const existing = prev[key];
      if (existing) {
        return {
          ...prev,
          [key]: {
            ...existing,
            quantity: existing.quantity + quantity
          }
        };
      } else {
        return {
          ...prev,
          [key]: {
            product,
            quantity,
            size,
            color,
            addedAt: new Date().toISOString()
          }
        };
      }
    });
  };

  const removeFromCart = (key) => {
    setCart(prev => {
      const newCart = { ...prev };
      delete newCart[key];
      return newCart;
    });
  };

  const updateQuantity = (key, quantity) => {
    if (quantity <= 0) {
      removeFromCart(key);
      return;
    }
    
    setCart(prev => ({
      ...prev,
      [key]: {
        ...prev[key],
        quantity
      }
    }));
  };

  const clearCart = () => {
    setCart({});
  };

  const getCartItems = () => {
    return Object.entries(cart).map(([key, item]) => ({
      key,
      ...item
    }));
  };

  const getCartTotal = () => {
    return getCartItems().reduce((total, item) => {
      return total + (item.product.price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return getCartItems().reduce((count, item) => count + item.quantity, 0);
  };

  const isInCart = (productId, size = null, color = null) => {
    const key = `${productId}_${size || 'default'}_${color || 'default'}`;
    return !!cart[key];
  };

  const value = {
    cart,
    cartItems: getCartItems(),
    cartTotal: getCartTotal(),
    cartCount: getCartCount(),
    isOpen,
    setIsOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    isInCart
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
