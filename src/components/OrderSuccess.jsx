import { Link } from 'react-router-dom';

const OrderSuccess = () => {
  return (
    <div className="container my-5 text-center">
      <div className="card shadow-sm p-5">
        <h1 className="text-success mb-4">🎉 Order Placed Successfully!</h1>
        <p className="lead mb-4">Thank you for your purchase. We'll send you an email with your order details shortly.</p>
        <div>
          <Link to="/" className="btn btn-primary">
            Continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;