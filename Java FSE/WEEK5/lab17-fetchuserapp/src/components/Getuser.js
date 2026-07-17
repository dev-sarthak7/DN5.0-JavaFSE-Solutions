import React, { Component } from 'react';

class Getuser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    fetch('https://api.randomuser.me/')
      .then((response) => response.json())
      .then((data) => {
        this.setState({ user: data.results[0] });
      })
      .catch((error) => console.error('Error fetching user:', error));
  }

  render() {
    const { user } = this.state;

    if (!user) {
      return <p>Loading user...</p>;
    }

    return (
      <div>
        <h2>Random User</h2>
        <img src={user.picture.large} alt="user" />
        <p>Title: {user.name.title}</p>
        <p>First Name: {user.name.first}</p>
      </div>
    );
  }
}

export default Getuser;
