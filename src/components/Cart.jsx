import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal } = useContext(CartContext);

  const handleCheckout = () => {
    console.log('Cart contents:', cart);
    console.log('Total amount:', getCartTotal());
  };

  if (cart.length === 0) {
    return (
      <div className="container my-4">
        <h2>Shopping Cart</h2>
        <div className="alert alert-info">Your cart is empty</div>
      </div>
    );
  }

  return (
    <div className="container my-4">
      <h2 className="mb-4">Shopping Cart</h2>
      <div className="card shadow-sm">
        <div className="card-body">
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map(item => (
                  <tr key={item.id}>
                    <td>
                      <div className="d-flex align-items-center">
                        <img 
                          src={item.image} 
                          alt={item.name} 
                          style={{ width: '50px', height: '50px', objectFit: 'cover' }}
                          className="me-2 rounded"
                        />
                        <div>
                          <h6 className="mb-0">{item.name}</h6>
                          <small className="text-muted">{item.brand}</small>
                        </div>
                      </div>
                    </td>
                    <td>₦{item.price.toLocaleString()}</td>
                    <td>
                      <input
                        type="number"
                        className="form-control form-control-sm"
                        style={{ width: '80px' }}
                        min="1"
                        value={item.quantity}
                        onChange={(e) => updateQuantity(item.id, e.target.value)}
                      />
                    </td>
                    <td>₦{(item.price * item.quantity).toLocaleString()}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="d-flex justify-content-end border-top pt-3">
            <div className="text-end">
              <h4>Total: ₦{getCartTotal().toLocaleString()}</h4>
              <button 
                className="btn btn-success mt-2"
                onClick={handleCheckout}
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;