import React, { Component } from 'react';

class BlockInfo extends Component {
  render() {
    return (
      <div className="block blockInfo">
          <h3>YOUR CURRENT PLAN</h3>
          <div>
            <h2>Home 250<span>MB</span></h2>
            <button className="blockInfoBtn">
              CHANGE PLAN&emsp;<i className="fas fa-play"></i>
            </button>
          </div>
      </div>
    );
  }
}

export default BlockInfo;
