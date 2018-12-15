import React, { Component } from 'react';
import BarChart from './BarChart';

class BlockPlanUsage extends Component {
  showBtnSm = false;
  showBtnLg = false;

  componentWillMount() {
    // window.location.pathname
    // if ()
    // CONTINUE HERE
    // check the path, and turn on and off the btns.
    // 999
  }

  render() {
    return (
      <div className="block blockData">
        <BarChart
          title="Data"
          amountFull="250"
          amountCurrent="169"
          unit="mb"
          showBarChartBtnSm={this.showBtnSm}
          showBarChartBtnLg={this.showBtnLg}></BarChart>
        <BarChart
          title="Talk / Canada"
          amountFull="100"
          amountCurrent="32"
          unit="min"
          showBarChartBtnSm={this.showBtnSm}
          showBarChartBtnLg={this.showBtnLg}></BarChart>
        <BarChart
          title="Text / Canada &amp; USA"
          amountFull="Unlimited"
          amountCurrent="Unlimited"
          unit=""
          showBarChartBtnSm={this.showBtnSm}
          showBarChartBtnLg={this.showBtnLg}></BarChart>              
      </div>
    );
  }
}

export default BlockPlanUsage;
