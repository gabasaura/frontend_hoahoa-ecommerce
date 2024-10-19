// Cart.tsx
import React from 'react';
import CartItem from './CartItem';

const Cart: React.FC = () => {
  return (
    <div>
      <h4 className="d-flex justify-content-between align-items-center mb-3">
        <span className="text-primary">Your cart</span>
        <span className="badge bg-primary rounded-pill">3</span>
      </h4>
      <ul className="list-group mb-3">
        <CartItem title="22 Inch Monitor" price={12} description="Brief description" />
        <CartItem title="Mobile phone" price={8} description="Brief description" />
        <CartItem title="Drone" price={5} description="Brief description" />
        <li className="list-group-item d-flex justify-content-between">
          <span>Total (USD)</span>
          <strong>$20</strong>
        </li>
      </ul>
      <button className="w-100 btn btn-primary btn-lg" type="submit">
        Continue to Checkout
      </button>
    </div>
  );
};



export default Cart;
