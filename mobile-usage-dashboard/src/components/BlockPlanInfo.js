import React, { Component } from 'react';
import BarChart from './BarChart';

class BlockPlanInfo extends Component {

  render() {
    const { title, body, unit, action } = this.props;
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
        <div className="block blockData">
          <BarChart
            title="Data"
            amountFull="250"
            amountCurrent="250"
            unit="mb"
            showAddBtn="false"></BarChart>
          <BarChart
            title="Talk / Canada"
            amountFull="100"
            amountCurrent="100"
            unit="min"
            showAddBtn="false"></BarChart>
          <BarChart
            title="Text / Canada &amp; USA"
            amountFull="Unlimited"
            amountCurrent="Unlimited"
            unit=""
            showAddBtn="false"></BarChart>              
        </div>
      </div>
    );
  }
}

export default BlockPlanInfo;
