import React from 'react';
import ProductCard from '../component/ProductCard';
import CartProduct from '../component/CartProduct';

async function getData() {
  const res = await fetch('https://62f8b754e0564480352bf3de.mockapi.io/food', {
    next: { revalidate: 5 },
  });

  return res.json();
}
const ProductList = async () => {
  const data = await getData();
  return (
    <div>
      <div className="grid grid-cols-5 gap-5">
        {data.map((item) => {
          return <ProductCard item={item} key={item.id} />;
        })}
      </div>
      <CartProduct />
    </div>
  );
};

export default ProductList;
