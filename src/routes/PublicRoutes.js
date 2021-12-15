import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import Home from '../views/Home';
import Charts from '../views/Charts';
import Chords from '../views/Chords';
import Tuner from '../views/Tuner';
import ChartDetails from '../views/ChartDetails';
import UserDetails from '../views/UserDetails';

export default function PublicRoutes({ user }) {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/charts" component={() => <Charts user={user} />} />
      <Route
        exact
        path="/details/:firebaseKey"
        component={() => <ChartDetails user={user} />}
      />
      <Route exact path="/userDetails/:userName" component={UserDetails} />
      <Route exact path="/chords" component={Chords} />
      <Route exact path="/tuner" component={Tuner} />
    </Switch>
  );
}

PublicRoutes.propTypes = {
  user: PropTypes.shape({
    isAdmin: PropTypes.bool,
  }),
};

PublicRoutes.defaultProps = {
  user: {},
};
