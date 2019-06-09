import React, {Component} from 'react';

export default class LightInterface extends Component {

  render() {
    return (
      <div>
        <h1>Light Settings</h1>
        <ul>
          <li>
            <button type='submit'>Turn On All Lights</button>
          </li>
          <li>
            <button type='submit'>Turn Off All Lights</button>
          </li>
          <li>
            <button type='submit'>Turn On Light 1</button>
          </li>
          <li>
            <button type='submit'>Turn On Light 2</button>
          </li>
          <li>
            <button type='submit'>Turn On Light 6</button>
          </li>
          <li>
            <button type='submit'>Turn On Light 7</button>
          </li>
          <li>
            <button type='submit'>Turn Off Light 1</button>
          </li>
          <li>
            <button type='submit'>Turn Off Light 2</button>
          </li>
          <li>
            <button type='submit'>Turn Off Light 6</button>
          </li>
          <li>
            <button type='submit'>Turn Off Light 7</button>
          </li>
        </ul>
      </div>
    )
  }
}
