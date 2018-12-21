import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

class BarChart extends Component {
  history = createBrowserHistory();
  render() {
    // 999 Move these into a function, probably use class property to streo some of them?
    const { title, amountFull:amtFull, amountCurrent:amtCur, unit } = this.props;
    const barWidth = amtCur/amtFull || null;
    const scaleFix = amtFull/amtCur || null;
    const isAddonsPage = this.history.location.pathname.toLowerCase().includes('addons');
    const isNotFullBar = barWidth != 1 && barWidth != null;
    const showBtnSm = !isAddonsPage && isNotFullBar;
    const showBtnLg = isAddonsPage && isNotFullBar;
    return (
      <div className="barChartContainer">
        <h3>{ title }</h3>
        { showBtnSm &&
          <button className="barChartBtnSm">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }
        {/* 999 if showBtnLg is true, then the class name should be 'barChart displayBtnLg' */}
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
        { showBtnLg  &&
          <button className="barChartBtnLg">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }        
      </div>
    );
  }
}

export default BarChart;
