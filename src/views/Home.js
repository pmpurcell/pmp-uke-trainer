import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      <div id="homeDiv">
        <img
          src="https://res.cloudinary.com/mpurcell/image/upload/v1639621525/Uke_mzmpga.png"
          alt="UkeTrainer"
        />

        <Link to="/charts">
          <button className="home-button" type="button">
            View Charts
          </button>
        </Link>
        <Link to="/tuner">
          <button className="home-button" type="button">
            View Tuner
          </button>
        </Link>
      </div>
    </div>
  );
}
