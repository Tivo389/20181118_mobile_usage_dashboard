import React, { Component } from 'react';

class BlockInfo extends Component {

  render() {
    const { title, body, unit, action } = this.props;
    return (
      <div className="block blockInfo">
          <h3>{ title }</h3>
          <div>
            <h2>{ body }{ unit ? <span>{ unit }</span> : null }</h2>
            <button className="blockInfoBtn">
              { action }&emsp;<i className="fas fa-play"></i>
            </button>
          </div>
      </div>
    );
  }
}

export default BlockInfo;
