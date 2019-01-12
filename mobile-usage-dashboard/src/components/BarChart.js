import React, { Component } from 'react';
import { createBrowserHistory } from 'history';

class BarChart extends Component {
  history = createBrowserHistory();
  state = {
    animate: false
  }

  componentWillMount() {
    this.interval = setTimeout(() => {
      this.setState({
        animate: true
      });
    }, 400);
  }
  componentWillUnmount() {
    clearTimeout(this.interval);
  }

  render() {
    const { title, amountFull:amtFull, amountCurrent:amtCur, unit } = this.props;
    const titleExtract = title.slice(0,4);
    const barWidth = amtCur/amtFull || 1;
    const currentValWidth = (barWidth * 100) || 100;
    const isAddonsPage = this.history.location.pathname.toLowerCase().includes('addons');
    const isNotFullBar = barWidth !== 1 && barWidth !== null;
    const showBtnSm = !isAddonsPage && isNotFullBar;
    const showBtnLg = isAddonsPage;
    let barChartBar = false;
    let currentAmount = false;
    if (this.state.animate) {
      barChartBar = <div className={`barChartBar ${titleExtract.toLowerCase()}`}
                         style={{ transform: `scaleX(${barWidth})`}}></div>;
      currentAmount = <p className="currentAmount"
                          style={{
                            width: `${currentValWidth}%`,
                            animation: 'fadeIn 0.6s ease-out',
                          }}>{ amtCur }{ unit !== "" && <span>{ unit.toUpperCase() }</span> }</p>;
    } else {
      barChartBar = <div className={`barChartBar ${titleExtract.toLowerCase()}`}></div>;
    }
    return (
      <div className="barChartContainer">
        <h3>{ title }</h3>
        { showBtnSm &&
          <button className="barChartBtnSm">
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button> }
        <div className={ showBtnLg ? "barChart displayBtnLg" : "barChart" } data-name="barChart">
          { currentAmount }
          { barChartBar }         
          <p className="fullAmount">
            { amtFull.toUpperCase() }
            { unit !== "" && <span>{ unit.toUpperCase() }</span> }
          </p>
        </div>
        { showBtnLg  &&
          <button className={ barWidth != null ? "barChartBtnLg" : "barChartBtnLg disabled" }>
            <img src={require('./../images/svgAdd.svg')} alt="Add Button"/>
          </button> }        
      </div>
    );
  }
}

export default BarChart;
