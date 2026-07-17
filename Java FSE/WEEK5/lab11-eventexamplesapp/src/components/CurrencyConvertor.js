import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rupees: '',
      euro: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ rupees: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const conversionRate = 0.011; // approx INR to EUR
    const euroValue = (parseFloat(this.state.rupees) * conversionRate).toFixed(2);
    this.setState({ euro: euroValue });
  }

  render() {
    return (
      <div>
        <h2>Currency Convertor (INR to EUR)</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="number"
            value={this.state.rupees}
            onChange={this.handleChange}
            placeholder="Enter amount in Rupees"
          />
          <button type="submit">Convert</button>
        </form>
        {this.state.euro !== null && (
          <p>{this.state.rupees} INR = {this.state.euro} EUR</p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;
