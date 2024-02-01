import React, { useEffect, useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [product, SetProduct] = useState([]);
  const [cart, SetCart] = useState([]);

  useEffect(() => {
    fetch('newExercise.json')
      .then((res) => res.json())
      .then((data) => SetProduct(data));
  }, []);

  function addToCart(products) {
    if (cart.length) {
      let newCart = [...cart, products];
      console.log(newCart);
      SetCart(newCart);
    } else {
      SetCart([products]);
      console.log(cart);
    }
  }

  return (
    <div>
      <div className='d-flex'>
        <div>
          {/* <h3>Left: {product.length}</h3> */}
          <div className='shop-container'>
            {product.map((pro) => (
              <Product key={pro.id} item={pro} addToCart={addToCart}></Product>
            ))}
          </div>
        </div>
        <div className='cart-container'>
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
