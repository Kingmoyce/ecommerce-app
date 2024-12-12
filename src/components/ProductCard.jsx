import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="card h-100 shadow-sm">
      <img 
        src={product.image} 
        className="card-img-top p-3" 
        alt={product.name}
        style={{ objectFit: 'contain', height: '200px' }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text text-muted mb-1">{product.brand}</p>
        <p className="card-text small">{product.description}</p>
        <div className="mt-auto">
          <p className="card-text fw-bold fs-5">₦{product.price.toLocaleString()}</p>
          <button 
            className="btn btn-primary w-100"
            onClick={() => addToCart(product)}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;