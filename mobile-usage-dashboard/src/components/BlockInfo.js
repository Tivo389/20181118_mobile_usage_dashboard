import React, { Component } from 'react';

class BlockInfo extends Component {

  render() {
    const { title, body, unit, action } = this.props;
    return (
      <div className="block blockInfo">
        <h3>{ title }</h3>
        <div>
          <h2>{ body }&thinsp;{ unit ? <span>{ unit }</span> : null }</h2>
          { action ? 
            <button className="blockInfoBtn">
              { action }&emsp;<i className="fas fa-play"></i>
            </button>
            : null }
        </div>
      </div>
    );
  }
}

export default BlockInfo;
