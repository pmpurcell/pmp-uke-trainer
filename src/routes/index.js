import React from 'react';
import { PropTypes } from 'prop-types';
import UserRoutes from './UserRoutes';
import PublicRoutes from './PublicRoutes';

export default function Routes({ user }) {
  return (
    <>
      {user && <UserRoutes />}
      <PublicRoutes user={user} />
    </>
  );
}

Routes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

Routes.defaultProps = {
  user: {},
};
