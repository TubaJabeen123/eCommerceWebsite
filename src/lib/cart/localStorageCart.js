export const loadCartFromLocalStorage = () => {
    try {
      const serializedCart = localStorage.getItem('cart');
      if (serializedCart === null) {
        return { items: [] };
      }
      return JSON.parse(serializedCart);
    } catch (err) {
      console.error("Could not load cart from localStorage", err);
      return { items: [] };
    }
  };
  
  export const saveCartToLocalStorage = (cart) => {
    try {
      const serializedCart = JSON.stringify(cart);
      localStorage.setItem('cart', serializedCart);
    } catch (err) {
      console.error("Could not save cart to localStorage", err);
    }
  };