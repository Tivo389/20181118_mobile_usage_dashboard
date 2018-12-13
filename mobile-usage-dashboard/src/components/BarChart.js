import React, { Component } from 'react';

class BarChart extends Component {
  render() {
    const { title, amountFull, amountCurrent, unit, showAddBtn } = this.props;
    const barWidth = amountCurrent/amountFull || null;
    const scaleFix = amountFull/amountCurrent || null;
    return (
      <div>
        <h3>{ title }</h3>
        { showAddBtn === "true" &&
          <button className="blockDataBtn">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }
        <div className="barChart">
          <div
            className={`barChartBar ${title.toLowerCase()}`}
            style={{transform: `scaleX(${barWidth})`}}>
            <p style={{transform: `scaleX(${scaleFix})`}}>
              { amountCurrent }
              { unit !== "" && <span>{ unit }</span> }
            </p>
            {/* 999 Continue here */}
          </div>
          <p>
            { amountFull }
            { unit !== "" && <span>{ unit }</span> }
          </p>
        </div>
      </div>
    );
  }
}

export default BarChart;
