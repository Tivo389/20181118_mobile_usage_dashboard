import React, { Component } from 'react';
import BarChart from './BarChart';

class BlockData extends Component {
  render() {
    return (
      <div className="block blockData">
        <BarChart
          title="Data"
          amountFull="250"
          amountCurrent="169"
          unit="mb"></BarChart>
        <BarChart
          title="Talk / Canada"
          amountFull="100"
          amountCurrent="32"
          unit="min"></BarChart>
        <BarChart
          title="Text / Canada &amp; USA"
          amountFull="Unlimited"
          amountCurrent="Unlimited"
          unit=""></BarChart>              
      </div>
    );
  }
}

export default BlockData;
