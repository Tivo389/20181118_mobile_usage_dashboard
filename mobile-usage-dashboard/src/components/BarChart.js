import React, { Component } from 'react';

class BarChart extends Component {
  render() {
    const {
      title,
      amountFull:amtFull,
      amountCurrent:amtCur,
      unit,
      showBarChartBtnSm:btnSm,
      showBarChartBtnLg:btnLg
    } = this.props;
    const barWidth = amtCur/amtFull || null;
    const scaleFix = amtFull/amtCur || null;
    return (
      <div className="barChartContainer">
        <h3>{ title }</h3>
        { btnSm === true &&
          <button className="barChartBtnSm">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }
        <div className="barChart" data-name="barChart">
          <div
            className={`barChartBar ${title.toLowerCase()}`}
            style={{transform: `scaleX(${barWidth})`}}>
            <p style={{transform: `scaleX(${scaleFix})`}}>
              { amtCur }
              { unit !== "" && <span>{ unit }</span> }
            </p>
          </div>
          <p>
            { amtFull }
            { unit !== "" && <span>{ unit }</span> }
          </p>
        </div>
        { btnLg === true &&
          <button className="barChartBtnLg">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }        
      </div>
    );
  }
}

export default BarChart;
