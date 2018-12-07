import React, { Component } from 'react';

class BarChart extends Component {
  render() {
    const { title, amountFull, amountCurrent, unit } = this.props;
    const barWidth = amountCurrent/amountFull || null;
    const scaleFix = amountFull/amountCurrent || null;
    return (
      <div>
        <h3>{ title }</h3>
        { amountFull !== "Unlimited" &&
          <button className="blockDataBtn">
            <i className="fas fa-plus"></i>
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
