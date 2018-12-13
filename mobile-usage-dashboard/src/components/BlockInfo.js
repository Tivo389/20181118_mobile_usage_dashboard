import React, { Component } from 'react';

class BlockInfo extends Component {

  render() {
    const { title, body, unit, action, info } = this.props;
    return (
      <div className="block blockInfo">
        <h3>{ title }</h3>
        <div>
          <h2>{ body }{ unit && <span>{ unit }</span> }</h2>
          { action ? 
            <button className="blockInfoBtn">
              { action }<i className="fas fa-play"></i>
            </button>
            : null }
        </div>
        { info && <p className="blockInfoText">{ info }</p> }
      </div>
    );
  }
}

export default BlockInfo;
