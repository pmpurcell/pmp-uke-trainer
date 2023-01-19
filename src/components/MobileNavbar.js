import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsMenuButtonWideFill,
  BsFillFileMusicFill,
} from 'react-icons/bs';

export default function MobileNavbar() {
  return (
    <nav id="mobileNavbar">
      <div className="nav-column">
        <div className="nav-row">
          <Link to="/">
            <div
              className="nav-column
            "
            >
              <BsFillHouseDoorFill />
              <p>Home</p>
            </div>
          </Link>
          <Link to="/charts">
            <div className="nav-column">
              <BsMenuButtonWideFill />
              <p>Browse Charts</p>
            </div>
          </Link>
          <Link to="/tuner">
            <div className="nav-column">
              <BsFillFileMusicFill />
              <p>Tuner</p>
            </div>
          </Link>
        </div>
        <p>© Madden Purcell, 2021</p>
      </div>
    </nav>
  );
}
