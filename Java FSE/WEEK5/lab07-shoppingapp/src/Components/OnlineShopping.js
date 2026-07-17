import React, { Component } from 'react';
import Cart from './Cart';

class OnlineShopping extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: [
        { itemname: 'Laptop', price: 55000 },
        { itemname: 'Headphones', price: 2000 },
        { itemname: 'Mouse', price: 500 },
        { itemname: 'Keyboard', price: 1200 },
        { itemname: 'Monitor', price: 9000 }
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Online Shopping Cart</h1>
        <ul>
          {this.state.cartItems.map((item, index) => (
            <Cart key={index} itemname={item.itemname} price={item.price} />
          ))}
        </ul>
      </div>
    );
  }
}

export default OnlineShopping;
