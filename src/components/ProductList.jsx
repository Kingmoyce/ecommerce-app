import React from 'react';
import ProductCard from './ProductCard';
import { products } from '../data/productData';

const ProductList = () => {
  return (
    <div className="container my-4">
      <h2 className="mb-4">Our Products</h2>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        {products.map(product => (
          <div key={product.id} className="col">
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;