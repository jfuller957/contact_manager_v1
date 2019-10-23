import React, { Component } from 'react';

class Contact extends Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <ul>
          <li>E: {this.props.email}</li>
          <li>P: {this.props.phone}</li>
        </ul>
      </div>
    );
  }
}

export default Contact;
