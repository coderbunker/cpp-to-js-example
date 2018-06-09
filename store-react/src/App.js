import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const storejs = require('storejs');

class App extends Component {
  state = {
    value: 1
  }

  componentDidMount() {
    storejs().then((m) => {
      this.store = m;
      this.setState({value: this.store._retrieve_value()});
    });
  }

  increment() {
    this.store._store_value(this.store._retrieve_value()+1);
    this.setState({value: this.store._retrieve_value()});
  }

  decrement() {
    this.store._store_value(this.store._retrieve_value()-1);
    this.setState({value: this.store._retrieve_value()});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Store</h1>
        </header>
        <p className="App-intro">
          Value: {this.state.value}
        </p>
        <button onClick={this.increment.bind(this)}>Increment</button>
        <button onClick={this.decrement.bind(this)}>Decrement</button>
      </div>
    );
  }
}

export default App;
