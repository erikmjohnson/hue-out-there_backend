import React from 'react';
import {BrowserRouter, Route, Link} from 'react-router-dom';
import LightInterface from './LightInterface/LightInterface';

export default class App extends React.Component {
  render() {
    return (
      <main>
        <BrowserRouter>
          <Route exact path="/user" component={LightInterface}/>
        </BrowserRouter>
      </main>
    );
  }
}

