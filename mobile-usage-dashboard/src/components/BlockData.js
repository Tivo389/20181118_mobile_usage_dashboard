import React, { Component } from 'react';

class BlockData extends Component {
  render() {
    return (
      <div className="block blockData">
        <h3>{ this.props.title }</h3>
        <button className="blockDataBtn">
          <i className="fas fa-plus"></i>
        </button>
        <div className="barChart"></div>
      </div>
    );
  }
}

export default BlockData;
