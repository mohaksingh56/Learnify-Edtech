import React from 'react';
import './Join.css';

const Join = () => {
  return (
    <div
      className="subscribe-section"
      style={{ backgroundImage: `url('/join.png')` }}
    >
      <div className="subscribe-content">
        <h1>Join with us & <br /> grow your <span>Personal Skills</span></h1>
        <p>
          Learn smarter skills with zero effort using tools built for your pace.
          Video-led guidance flows easy through your learning path.
          Progress feels automatic.
        </p>
        <div className="subscribe-input">
          <input type="email" placeholder="Enter Your Mail" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Join;
