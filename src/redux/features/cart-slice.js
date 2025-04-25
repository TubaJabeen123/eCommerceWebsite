import { createSelector, createSlice } from "@reduxjs/toolkit";

// Helper functions for localStorage
const loadCartFromLocalStorage = () => {
  if (typeof window !== 'undefined') {
    try {
      const serializedCart = localStorage.getItem('cart');
      return serializedCart ? JSON.parse(serializedCart) : { items: [] };
    } catch (err) {
      console.error("Could not load cart from localStorage", err);
      return { items: [] };
    }
  }
  return { items: [] };
};

const saveCartToLocalStorage = (cart) => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem('cart', JSON.stringify(cart));
    } catch (err) {
      console.error("Could not save cart to localStorage", err);
    }
  }
};

// Initialize state from localStorage
const initialState = loadCartFromLocalStorage();

export const cart = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action) => {
      const { id, title, price, quantity, discountedPrice, imgs } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity += quantity;
      } else {
        state.items.push({
          id,
          title,
          price,
          quantity,
          discountedPrice,
          imgs,
        });
      }
      saveCartToLocalStorage(state);
    },
    removeItemFromCart: (state, action) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      saveCartToLocalStorage(state);
    },
    updateCartItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const existingItem = state.items.find((item) => item.id === id);

      if (existingItem) {
        existingItem.quantity = quantity;
        saveCartToLocalStorage(state);
      }
    },
    removeAllItemsFromCart: (state) => {
      state.items = [];
      saveCartToLocalStorage(state);
    },
    initializeCartFromStorage: (state) => {
      const storedCart = loadCartFromLocalStorage();
      state.items = storedCart.items;
    }
  },
});

// Selectors remain the same
export const selectCartItems = (state) => state.cartReducer.items;

export const selectTotalPrice = createSelector([selectCartItems], (items) => {
  return items.reduce((total, item) => {
    return total + item.discountedPrice * item.quantity;
  }, 0);
});

// Export all actions including the new one
export const {
  addItemToCart,
  removeItemFromCart,
  updateCartItemQuantity,
  removeAllItemsFromCart,
  initializeCartFromStorage,
} = cart.actions;

export default cart.reducer;