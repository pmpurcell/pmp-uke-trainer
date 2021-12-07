import React from 'react';
import {
  ProSidebar, Menu, MenuItem, SidebarFooter,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import { signInUser, signOutUser } from '../api/auth';

export default function Navigation({ user }) {
  return (
    <div>
      <ProSidebar>
        <Menu iconShape="square">
          <MenuItem>
            Home
            <Link to="/" />
          </MenuItem>
          <MenuItem>
            Chords
            <Link to="/chords" />
          </MenuItem>
          <MenuItem>
            Charts
            <Link to="/charts" />
          </MenuItem>
          <MenuItem>
            Tuner
            <Link to="/tuner" />
          </MenuItem>
          {user ? (
            <MenuItem
              type="button"
              className="btn btn-secondary"
              onClick={signOutUser}
            >
              Sign Out
            </MenuItem>
          ) : (
            <MenuItem
              type="button"
              className="btn btn-secondary"
              onClick={signInUser}
            >
              Sign In
            </MenuItem>
          )}
        </Menu>
        <SidebarFooter>© Madden Purcell, 2021</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Navigation.defaultProps = {
  user: {},
};
