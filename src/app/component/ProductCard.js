'use client';
import React from 'react';
import ButtonAddProduct from './ButtonAddProduct';

const ProductCard = ({ item }) => {
  return (
    <div
      key={item.id}
      className="max-w-sm rounded overflow-hidden shadow-lg border-white cursor-pointer"
    >
      <img
        className="w-full"
        src={item.hinhAnh}
        alt="Sunset in the mountains"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{item.name}</div>
        <p className="text-gray-700 text-base">{item.moTa}</p>
        <ButtonAddProduct item={item} />
      </div>
    </div>
  );
};

export default ProductCard;
