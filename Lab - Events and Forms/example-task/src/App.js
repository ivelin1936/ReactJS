import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Container from './components/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Example Task - Events and Forms in React</h1>
          <Container>
            {/*This img will be passed to container like an array of elements. Can be used from props.children*/}
            <img src={logo} className="App-logo" alt="logo" />
          </Container>
        </header>
      </div>
    );
  }
}

export default App;
