import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

class BarChart extends Component {
  history = createBrowserHistory();
  render() {
    const { title, amountFull:amtFull, amountCurrent:amtCur, unit } = this.props;
    const barWidth = amtCur/amtFull || null;
    const currentValWidth = (barWidth * 100) || 100;
    const isAddonsPage = this.history.location.pathname.toLowerCase().includes('addons');
    const isNotFullBar = barWidth !== 1 && barWidth !== null;
    const showBtnSm = !isAddonsPage && isNotFullBar;
    const showBtnLg = isAddonsPage;
    return (
      <div className="barChartContainer">
        <h3>{ title }</h3>
        { showBtnSm &&
          <button className="barChartBtnSm">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }
       
        <div className={ showBtnLg ? "barChart displayBtnLg" : "barChart" } data-name="barChart">
          <p className="currentAmount" style={{width: `${currentValWidth}%`}}>
            { amtCur }
            { unit !== "" && <span>{ unit.toUpperCase() }</span> }
          </p>
          <div
            className={`barChartBar ${title.toLowerCase()}`}
            style={{transform: `scaleX(${barWidth})`}}>
          </div>
          <p className="fullAmount">
            { amtFull }
            { unit !== "" && <span>{ unit.toUpperCase() }</span> }
          </p>
        </div>
        { showBtnLg  &&
          <button className={ barWidth != null ? "barChartBtnLg" : "barChartBtnLg disabled" }>
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button>
        }        
      </div>
    );
  }
}

export default BarChart;
