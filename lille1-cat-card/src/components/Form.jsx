import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        { this.props.children }
      </div>
    )
  }
}
