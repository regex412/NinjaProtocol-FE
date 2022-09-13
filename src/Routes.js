import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import NinjaGame from './pages/ninjagame';
import NinjaVision from './pages/ninjavision';
import NinjaWeb from './pages/ninjaweb';
import ContactUs from './pages/contactUs';

export default function Routes() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>{' '}
        </Switch>
        <Switch>
          <Route path='/ninjaweb'>
            <NinjaWeb />
          </Route>
        </Switch>
        <Switch>
          <Route path='/ninjavision'>
            <NinjaVision />
          </Route>
        </Switch>
        <Switch>
          <Route path='/NinjaGame'>
            <NinjaGame />
          </Route>
        </Switch>
        <Switch>
          <Route path='/contactUs'>
            <ContactUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}
