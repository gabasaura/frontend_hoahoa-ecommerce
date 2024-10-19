import React from 'react';
import { Link } from 'react-router-dom';


const Navbar: React.FC = () => {
  return (
    <>
    <nav className="navbar navbar-expand-lg text-white text-uppercase">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <h2>HOAHOAHOA</h2>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">About</Link>
            </li>
            <li className="nav-item">
              <Link to="/shop" className="nav-link">Shop</Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;