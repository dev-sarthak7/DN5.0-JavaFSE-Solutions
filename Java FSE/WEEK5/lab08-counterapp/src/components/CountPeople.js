import React, { Component } from 'react';

class CountPeople extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entrycount: 0,
      exitcount: 0
    };

    this.updateEntry = this.updateEntry.bind(this);
    this.updateExit = this.updateExit.bind(this);
  }

  updateEntry() {
    this.setState((prevState) => ({ entrycount: prevState.entrycount + 1 }));
  }

  updateExit() {
    this.setState((prevState) => ({ exitcount: prevState.exitcount + 1 }));
  }

  render() {
    return (
      <div>
        <h1>Mall Visitor Counter</h1>
        <p>People entered: {this.state.entrycount}</p>
        <p>People exited: {this.state.exitcount}</p>
        <button onClick={this.updateEntry}>Login</button>
        <button onClick={this.updateExit}>Exit</button>
      </div>
    );
  }
}

export default CountPeople;
