import React, { Component } from 'react';

class BlockTitle extends Component {
  render() {
    return (
      <div className="block blockTitle">
        <h2>{ this.props.title }</h2>
        <button>
          <i className="fas fa-chevron-down"></i>
        </button>
      </div>
    );
  }
}

export default BlockTitle;
