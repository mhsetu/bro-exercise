import React from 'react';
import './Product.css';

const Product = ({ item, addToCart }) => {
  // console.log(item);
  const { title, duration, img, description } = item;
  return (
    <div className='item-container'>
      <img src={img} alt='' />
      <div className='product-text'>
        <h2 className='product-name'>Name: {title}</h2>
        <p>{description ? description.slice(0, 60) + '...' : description}</p>
        <p>
          Time: <small>{duration}</small>
        </p>
      </div>
      <button onClick={() => addToCart(item)} className='wishlist'>
        Add To Wishlist
      </button>
    </div>
  );
};

export default Product;
