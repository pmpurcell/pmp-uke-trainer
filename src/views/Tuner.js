import React from 'react';
import { Link } from 'react-router-dom';

export default function Tuner() {
  const gNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449472/G_-_Ukulele_bop466.mp3';
  const cNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449577/C_-_Ukulele_fungg1.mp3';
  const eNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449577/E_-_Ukulele_xpp9n4.mp3';
  const aNote = 'https://res.cloudinary.com/mpurcell/video/upload/v1639449578/A_-_Ukulele_fuj0rr.mp3';

  const playNote = (audio) => {
    new Audio(audio).play();
  };

  return (
    <div id="tunerDiv">
      <h1>Tuner</h1>
      <img
        src="https://media.istockphoto.com/photos/playing-ukulele-picture-id477710820?k=20&m=477710820&s=612x612&w=0&h=f27eIuyv7peSPPh_wivykGeieJYC3gI7wuRWozB1K1g="
        alt="Ukulele"
      />
      <div id="buttonDiv">
        <button
          className="tuner-button"
          type="button"
          onClick={() => playNote(gNote)}
        >
          G
        </button>
        <button
          className="tuner-button"
          type="button"
          onClick={() => playNote(cNote)}
        >
          C
        </button>
        <button
          className="tuner-button"
          type="button"
          onClick={() => playNote(eNote)}
        >
          E
        </button>
        <button
          className="tuner-button"
          type="button"
          onClick={() => playNote(aNote)}
        >
          A
        </button>
      </div>
      <Link to="/charts">
        <button className="home-button mobile-view-button" type="button">
          View Charts
        </button>
      </Link>
      <Link to="/">
        <button className="home-button mobile-view-button" type="button">
          Go Home
        </button>
      </Link>
    </div>
  );
}
