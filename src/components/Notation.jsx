import React, { useState } from 'react';

//Implementing the notation range
function Notation() {
  const [rating, setRating] = useState(0);
  const Star = ({ filled, onClick }) => {
    return (
      <span onClick={onClick} style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}>
        ★
      </span>
    );
  };

  const handleClick = (index) => {
    setRating(index + 1);
  };
  return (
    <div>
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          filled={index < rating}
          onClick={() => handleClick(index)}
        />
      ))}
      <br/>
      <br />
    </div>
          );
        
}
export default Notation;