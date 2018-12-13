import React, { Component } from 'react';
import {
  Header,
  NavTabs,
  BodyUsage,
  BodyPlanAndBills,
  Footer
} from './components';
import './css/stylesheet.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <Header></Header>
        <NavTabs></NavTabs>
        <div id="main">
          {/* <BodyUsage></BodyUsage> */}
          <BodyPlanAndBills></BodyPlanAndBills>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
