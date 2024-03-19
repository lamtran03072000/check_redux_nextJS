import React from 'react';
import ListProduct from '../component/ListProduct';
async function getData() {
  const res = await fetch('https://62f8b754e0564480352bf3de.mockapi.io/food', {
    next: { revalidate: 5 },
  });

  return res.json();
}
const ProductListState = async () => {
  const data = await getData();
  return <ListProduct data={data} />;
};

export default ProductListState;
