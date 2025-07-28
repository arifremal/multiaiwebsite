// src/components/Loader.jsx
import React from 'react';
import './Loader.css'; // External CSS for better structure

const Loader = () => {
  return (
    <div className="loader-wrapper">
      <div className="cube">
        <div className="face front">M</div>
        <div className="face back">A</div>
        <div className="face left">I</div>
        <div className="face right">S</div>
        <div className="face top">O</div>
        <div className="face bottom">N</div>
      </div>
      <h2 className="loader-text">MultiAiSolution is Loading...</h2>
    </div>
  );
};

export default Loader;
