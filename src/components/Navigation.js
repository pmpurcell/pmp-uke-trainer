import React, { useState } from 'react';
import {
  ProSidebar, Menu, MenuItem, SidebarFooter,
} from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import {
  BsFillArrowLeftSquareFill,
  BsFillArrowRightSquareFill,
} from 'react-icons/bs';
import { signInUser, signOutUser } from '../api/auth';

export default function Navigation({ user }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div id="navbar">
      <ProSidebar collapsed={collapsed}>
        <Menu iconShape="square">
          {collapsed ? (
            <MenuItem
              type="button"
              // className="btn btn-secondary"
              onClick={() => setCollapsed(!collapsed)}
            >
              <BsFillArrowLeftSquareFill />
            </MenuItem>
          ) : (
            <>
              <MenuItem
                type="button"
                // className="btn btn-secondary"
                onClick={() => setCollapsed(!collapsed)}
              >
                <BsFillArrowRightSquareFill />
              </MenuItem>
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
                <>
                  <MenuItem>Welcome, {user.fullName}!</MenuItem>
                  <MenuItem
                    type="button"
                    className="btn btn-secondary"
                    onClick={signOutUser}
                  >
                    Sign Out
                  </MenuItem>
                </>
              ) : (
                <MenuItem
                  type="button"
                  className="btn btn-secondary"
                  onClick={signInUser}
                >
                  Sign In
                </MenuItem>
              )}
            </>
          )}
        </Menu>
        <SidebarFooter>© Madden Purcell, 2021</SidebarFooter>
      </ProSidebar>
    </div>
  );
}

Navigation.propTypes = {
  user: PropTypes.shape({
    fullName: PropTypes.string,
    isAdmin: PropTypes.bool,
  }),
};

Navigation.defaultProps = {
  user: {},
};
