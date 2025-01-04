import React from 'react';
import "../css/Loader.css";
import LoaderImg from "../assets/bouncing-circles.svg";

//This component should be display to show the loading evolution
const Loader = () => {
  return (
    <div className='loader flex flex-c'>
      <img className='justify-center' src = {LoaderImg} alt = "loader" />
    </div>
  )
}

export default Loader;