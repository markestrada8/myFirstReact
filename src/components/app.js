import React, { Component } from 'react';

const name = 'Mark';
const loggedIn = true;

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Hello</h1>
        <h2>{loggedIn == true ? name : "not logged in"}</h2>
      </div>
    );
  }
}