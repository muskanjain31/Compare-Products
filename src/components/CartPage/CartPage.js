// import React, { useState } from 'react';
// import './CartPage.css';

// function CartPage() {
//   const [compareList, setCompareList] = useState([]);

//   return (
//     <div>
//       <h1>Add to Compare</h1>
//       {compareList.length === 0 ? (
//         <p>No products added to compare.</p>
//       ) : (
//         <ul className="cart-list">
//         {compareList.map((product, index) => (
//           <li key={index} className="cart-item">{product.name}</li>
//         ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default CartPage;
// Import necessary modules
import React from 'react';
import { useCart } from 'react-use-cart';
import './CartPage.css';
function CartPage() {
  const { compareList } = useCart();

  return (
    <>
    <h1>hhhhhgytfr</h1>
    
<div >
      <h1>Compare</h1>
       {compareList.length === 0 ? (
        <p>No products added to compare.</p>
      ) : (
        <div className="compare-container">
          {compareList.map((product, index) => (
            <div key={index} className="compare-item">
              <img src={product.image} alt={product.name} className="compare-image" />
              <p>{product.name}</p>
            </div >
          ))}
        </div >
      )}
    </div >
    </>
  );
}

export default CartPage;
