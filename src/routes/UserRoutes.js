import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Create from '../views/Create';
import Edit from '../views/Edit';
import EditComment from '../views/EditComment';

export default function UserRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/create" component={() => <Create user={user} />} />
      <Route exact path="/edit/:firebaseKey" component={() => <Edit />} />
      <Route
        exact
        path="/editComment/:firebaseKey"
        component={() => <EditComment />}
      />
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
