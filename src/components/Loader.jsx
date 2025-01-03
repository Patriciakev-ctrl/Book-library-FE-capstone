import React from 'react';
import LoaderImg from "../assets/bouncing-circles.svg";
import "../css/Loader.css";

const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img className='justify-center' src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader