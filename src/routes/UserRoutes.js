import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Create from '../views/Create';

export default function UserRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/create" component={() => <Create user={user} />} />
    </Switch>
  );
}

UserRoutes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

UserRoutes.defaultProps = {
  user: {},
};
