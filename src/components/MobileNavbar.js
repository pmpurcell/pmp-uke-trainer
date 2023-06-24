import React from 'react';
import { Link } from 'react-router-dom';
import {
  BsFillHouseDoorFill,
  BsMenuButtonWideFill,
  BsFillFileMusicFill,
} from 'react-icons/bs';
import { PropTypes } from 'prop-types';
import { signInUser, signOutUser } from '../api/auth';

export default function MobileNavbar({ user }) {
  return (
    <nav id="mobileNavbar">
      <div className="nav-column">
        <div className="nav-row">
          <Link to="/">
            <div
              className="nav-column"
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
          {user ? (
            <button type="button" className="sign-in-btn" onClick={signOutUser}>
              <div className="nav-column">
                <BsFillFileMusicFill />
                <p>Sign Out</p>
              </div>
            </button>
          ) : (
            <button type="button" className="sign-in-btn" onClick={signInUser}>
              <div className="nav-column">
                <BsFillFileMusicFill />
                <p>Sign In</p>
              </div>
            </button>
          )}
        </div>
        <p>© Madden Purcell, 2021</p>
      </div>
    </nav>
  );
}

MobileNavbar.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

MobileNavbar.defaultProps = {
  user: {},
};
