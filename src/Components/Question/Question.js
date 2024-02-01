import React from 'react';
import './Question.css';

const Question = () => {
  return (
    <div className='question'>
      <h2 className='text'>Question & Answer</h2>
      <div>
        <h3>How Does React Work?</h3>
        <p>
          React is a powerful JavaScript library to create interactive user
          interfaces with building blocks. It revolutionized UI development by
          introducing a declarative and component-based approach. Unlike manual
          Document Object Model (DOM) manipulation, as seen in jQuery, React
          employs a Virtual DOM to optimize performance.
        </p>
      </div>
      <div>
        <h3>Difference between Props and State</h3>
        <p>
          understanding the differences between React props and React state is
          essential for building robust and scalable React applications. Props
          are used for passing data down from parent to child components, while
          state is used for managing component-specific data. By understanding
          how props and state work together, you can create reusable and modular
          components that are easy to maintain and extend.
        </p>
      </div>
      <div>
        <h3>How many cases we can use useEffect except fetch data?</h3>
        <p>Running on state change: validating input field</p>{' '}
        <p>Running on state change: live filtering</p>{' '}
        <p>Running on state change: trigger animation on new array value</p>{' '}
        <p>
          Running on props change: update paragraph list on fetched API data
          update
        </p>
        <p>
          Running on props change: updating fetched API data to get BTC updated
          price
        </p>
      </div>
    </div>
  );
};

export default Question;
