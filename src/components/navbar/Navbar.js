import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component
import './navbar.css';
import Cart from '../../assets/images/cart.png';

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <Link className="navbar-brand" to="/"><span className="text-warning">Compare</span> products</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><Link to="/skincare" className="dropdown-item">Skin Care</Link></li> {/* Modified to use Link */}
                  <li><Link to="/haircare" className="dropdown-item">Hair Care</Link></li> {/* Modified to use Link */}
                  <li><Link to="/bodycare" className="dropdown-item">Body Care</Link></li> {/* Modified to use Link */}
                </ul>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Compare</button>
            </form>
            <div className="cart-icon">
              <img src={Cart} alt="Cart" /> {/* Add your cart image here */}
            </div>
           
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;
