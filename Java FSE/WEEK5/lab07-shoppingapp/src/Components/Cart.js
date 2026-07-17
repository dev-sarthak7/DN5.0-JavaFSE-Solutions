import React, { Component } from 'react';

class Cart extends Component {
  render() {
    return (
      <li>
        {this.props.itemname} - Rs. {this.props.price}
      </li>
    );
  }
}

export default Cart;
