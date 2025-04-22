// components/cart/CartInitializer.js
'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { initializeCartFromStorage } from '@/redux/features/cart-slice';

const CartInitializer = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeCartFromStorage());
  }, [dispatch]);

  return null;
};

export default CartInitializer;