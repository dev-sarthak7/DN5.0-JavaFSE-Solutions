import React, { Component } from 'react';

class EventExamples extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      message: ''
    };

    this.increment = this.increment.bind(this);
    this.sayHello = this.sayHello.bind(this);
    this.decrement = this.decrement.bind(this);
    this.sayWelcome = this.sayWelcome.bind(this);
    this.handlePress = this.handlePress.bind(this);
  }

  increment() {
    this.setState((prevState) => ({ counter: prevState.counter + 1 }));
    this.sayHello();
  }

  sayHello() {
    this.setState({ message: 'Hello there! Counter incremented.' });
  }

  decrement() {
    this.setState((prevState) => ({ counter: prevState.counter - 1 }));
  }

  sayWelcome(name) {
    alert(`Say ${name}!`);
  }

  handlePress(event) {
    // Synthetic event example
    this.setState({ message: 'I was clicked' });
  }

  render() {
    return (
      <div>
        <h2>Event Handling Examples</h2>
        <p>Counter: {this.state.counter}</p>
        <p>{this.state.message}</p>

        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <button onClick={() => this.sayWelcome('welcome')}>Say Welcome</button>
        <button onClick={this.handlePress}>OnPress</button>
      </div>
    );
  }
}

export default EventExamples;
