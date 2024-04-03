import Navbar from '../navbar/Navbar.js';
import Contacts from '../../Contacts.js';
import Card from '../card/Card.js';
import CarouselPage from '../carousel/Carousel.js';
import ProductCard from '../ProductCard/ProductCard.js';
import products from '../../Products.js';
import Footer from '../footer/footer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Update import statement
import React, { useState } from 'react'; // Import useState
import { useCart } from 'react-use-cart'; // Import useCart from react-use-cart
import Category from '../SkinCare/Skincare1.js'; // Import SkinCare component
import HairCare from '../haircare/HairCare.js'; // Import HairCare component
import BodyCare from '../bodycare/BodyCare.js'; // Import BodyCare component
import CartPage from "../CartPage/CartPage.js";

import './Homepage.css';

function Homepage() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomepageContent />} />
          <Route path="/skincare" element={<Category />} />
          <Route path="/haircare" element={<HairCare />} />
          <Route path="/bodycare" element={<BodyCare />} />
          <Route path="/compare" element={<CartPage />} />

        </Routes>
      </Router>
    </div>
  );
}

// Your existing homepage content
function HomepageContent() {
  const { addItem } = useCart(); // Destructure addItem from useCart
  const [compareList, setCompareList] = useState([]);
  return (
    <>
      <CarouselPage />
      <div className="App1">
        {Contacts.map(contacts => (
          <Card
            key={contacts.id}
            img={contacts.imgURL}
            name={contacts.name}
          />
        ))}
      </div>
      <div className='back-colour'>
        <h3 className='P-Products'>Popular Products</h3>
        <div className="container">
          <div className="row">
            {products.map(product => (
              <div key={products.id} className="col-lg-3 col-md-4">
                <ProductCard
                 product={product}
                  compareList={compareList} 
                  setCompareList={setCompareList}
                   />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Homepage;
