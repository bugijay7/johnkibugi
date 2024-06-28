import React from 'react';
import './landing.css';

function Landing({ onWelcomeClick }) {
  return (
    <div className='landing-container'>
  <button onClick={onWelcomeClick}>
  <span className="text">Welcome</span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  <span className="blob"></span>
  </button>
    </div>
  );
}

export default Landing;
