'use client';
import React from 'react';
import { useSelector } from 'react-redux';

const CartProduct = () => {
  const { arrCart } = useSelector((state) => state.shopPhoneReducer);
  return (
    <div>
      <h3 className="text-3xl">Đây là giỏ hàng</h3>

      <table>
        <thead>
          {' '}
          <tr>
            <td>id</td>
            <td>Tên</td>
          </tr>
        </thead>
        <tbody>
          {arrCart.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default CartProduct;
