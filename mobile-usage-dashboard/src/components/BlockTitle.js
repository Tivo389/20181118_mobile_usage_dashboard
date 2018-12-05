import React, { Component } from 'react';

class BlockTitle extends Component {
  render() {
    return (
      <div className="block blockTitle">
        <h2>{ this.props.title }</h2>
        <i className="fas fa-chevron-down"></i>
      </div>
    );
  }
}

export default BlockTitle;
