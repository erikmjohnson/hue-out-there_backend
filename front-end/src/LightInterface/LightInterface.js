import React, {Component} from 'react';

export default class LightInterface extends Component {
  render() {
    return(
      <div>
      <h1>Light Settings</h1>
        <ul>
          <li>Turn On All Lights</li>
          <li>Turn Off All Lights</li>
          <li>Turn On Light -insert number-</li>
          <li>Turn Off Light -insert number-</li>
        </ul>
      </div>
    )
  }
}
