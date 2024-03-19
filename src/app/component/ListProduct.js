'use client';

import React, { useState } from 'react';
import ListProductOnly from './ListProductOnly';

const ListProduct = ({ data }) => {
  const [arrCart, setArrCart] = useState([]);
  const handleAddProduct = (item) => {
    let newCart = [...arrCart, item];
    setArrCart(newCart);
  };
  return (
    <div>
      <ListProductOnly data={data} handleAddProduct={handleAddProduct} />
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
    </div>
  );
};

export default ListProduct;
