import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../views/Home';
import Charts from '../views/Charts';
import Chords from '../views/Chords';
import Tuner from '../views/Tuner';
import Create from '../views/Create';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/charts" component={Charts} />
      <Route exact path="/chords" component={Chords} />
      <Route exact path="/tuner" component={Tuner} />
      <Route exact path="/create" component={Create} />
    </Switch>
  );
}
