import React, { useState, useEffect } from 'react';
import Mobasshir from '../../Mobasshir.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationPin } from '@fortawesome/free-solid-svg-icons';
// import { parse } from '@fortawesome/fontawesome-svg-core';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart }) => {
  const [brak, setBrak] = useState(0);
  useEffect(() => {
    addToLocalStorage();
  }, [brak]);

  let second = 0;
  const times = [10, 20, 30, 40, 50];

  for (const time of cart) {
    let dura = time.duration.replace('s', '');
    second = second + parseInt(dura);
    console.log(second);
  }
  // Add break function
  function addBreak(e) {
    const storeValue = e.target.innerText.replace('s', '');

    localStorage.setItem('breaks', JSON.stringify(storeValue));

    setBrak((prev) => storeValue);
    console.log(storeValue);
  }
  //   function addBreak(time) {
  //     setBrak(time);
  //     console.log(time);
  //   }

  const addToLocalStorage = () => {
    let breaks = {};

    //get Shopping Cart
    const storedCart = localStorage.getItem('breaks');
    if (storedCart) {
      breaks = JSON.parse(storedCart);
    } else {
      breaks = {};
    }
    setBrak((prev) => breaks);
  };

  function activityCompleted() {
    toast('Successfully Completed');
  }
  return (
    <div>
      <div>
        <div className='profile'>
          <img src={Mobasshir} alt='' />
          <div>
            <h3 className='margin'>Mobasshir Hossen</h3>
            <p className='location'>
              <FontAwesomeIcon className='icon-color' icon={faLocationPin} />{' '}
              Dhaka,Bangladesh
            </p>
          </div>
        </div>
        <div className='personal-info'>
          <div>
            <div className='info-flex'>
              <h3>75</h3>
              <p className='margin-below'>kg</p>
            </div>
            <p>Weight</p>
          </div>
          <div>
            <h3>5.10</h3>
            <p>Height</p>
          </div>
          <div>
            <div className='info-flex'>
              <h3>25</h3>
              <p className='margin-below'>yrs</p>
            </div>
            <p>Age</p>
          </div>
        </div>
        <h3 className='break'>Add A Break</h3>
        <div className='break-time'>
          {times.map((p) => (
            <button
              key={p}
              className={`${brak == p ? 'active' : 'inactive'}`}
              onClick={(e) => addBreak(e)}
              //   onClick={(e) => addBreak(e.target.innerText.replace('s', ''))}
            >
              {p}
              <small>s</small>
            </button>
          ))}
          {/* {times.map((t) => (
            <button
              className={`${brak == t ? 'active' : 'inactive'}`}
              onClick={(e) => addBreak(t)}
              //   onClick={(e) => addBreak(e.target.innerText.replace('s', ''))}
            >
              {t}
              <small>s</small>
            </button>
          ))} */}
          {/* <button
            className={`${brak == '10' ? 'active' : 'inactive'}`}
            onClick={(e) => addBreak(e.target.innerText.replace('s', ''))}
          >
            10<small>s</small>
          </button> */}
        </div>
        <h3 className='break'>Exercise Details</h3>
        <div className='Exercise-time'>
          <h3>Exercise Time</h3>
          <p>{second} seconds</p>
        </div>
        <div className='Exercise-time'>
          <h3>Break Time</h3>
          <p>
            <span>{brak}</span> seconds
          </p>
        </div>
        <div className='completed'>
          <button onClick={activityCompleted}>Activity Completed</button>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
};

export default Cart;
