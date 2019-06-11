import React, {Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import LightInterface from './components/LightInterface/LightInterface';
import AuthRedirect from './components/AuthRedirect/AuthRedirect';
import Landing from './components/Landing/Landing';

export default class App extends Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <h1>Hue Out There?</h1>
          <Route path='/' component={AuthRedirect}/>
          <Route exact path="/user" component={LightInterface}/>
          <Route exact path="/signup" component={Landing}/>
          <Route exact path="/" component={Landing}/>
        </BrowserRouter>
      </main>
    );
  }
}

