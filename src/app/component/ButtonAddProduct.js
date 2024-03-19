'use client';
import { addProductAction } from '@/app/GlobalRedux/reducer/shopPhoneReducer';
import React from 'react';
import { useDispatch } from 'react-redux';

const ButtonAddProduct = ({ item }) => {
  const dispactch = useDispatch();
  return (
    <button
      onClick={() => {
        dispactch(addProductAction(item));
      }}
      className="bg-yellow-300 text-white rounded cursor-pointer"
    >
      Thêm
    </button>
  );
};

export default ButtonAddProduct;
