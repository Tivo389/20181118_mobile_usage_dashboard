import React, { Component } from 'react';

class BlockData extends Component {
  render() {
    return (
      <div className="block blockData">
        <div>
          <h3>Data</h3>
          <button className="blockDataBtn">
            <i className="fas fa-plus"></i>
          </button>
          <div className="barChart">
            <div className="barChartBar data" style={{transform: 'scaleX(0.6)'}}>
              <p style={{transform: 'scaleX(1.666666)'}}>169&thinsp;<span>MB</span></p>
            </div>
            <p>250&thinsp;<span>MB</span></p>
          </div>
        </div>
        <div>
          <h3>Talk / Canada</h3>
          <button className="blockDataBtn">
            <i className="fas fa-plus"></i>
          </button>
          <div className="barChart">
            <div className="barChartBar talk" style={{transform: 'scaleX(0.6)'}}>
              <p style={{transform: 'scaleX(1.666666)'}}>169&thinsp;<span>MB</span></p>
            </div>
            <p>250&thinsp;<span>MB</span></p>
          </div>
        </div>
        <div>
          <h3>Text / Canada &amp; USA</h3>
          <button className="blockDataBtn">
            <i className="fas fa-plus"></i>
          </button>
          <div className="barChart">
            <div className="barChartBar text" style={{transform: 'scaleX(0.6)'}}>
              <p style={{transform: 'scaleX(1.666666)'}}>169&thinsp;<span>MB</span></p>
            </div>
            <p>250&thinsp;<span>MB</span></p>
          </div>
        </div>
      </div>
    );
  }
}

export default BlockData;
