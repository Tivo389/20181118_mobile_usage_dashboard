import React, { Component } from 'react';
import { createBrowserHistory } from 'history';
import {
  Header,
  NavTabs,
  BodyUsage,
  BodyPlanAndBills,
  BodyAddons,
  Footer
} from './components';
import './css/stylesheet.css';

class App extends Component {
  history = createBrowserHistory();

  // constructor(props) {
  //   super(props);
  //   this.getHref = this.getHref.bind(this);
  // }

  componentDidMount() {
    const allAnchors = Array.from(document.querySelectorAll('a'));
    console.log(allAnchors);
    // Take a note of this 999 binding methods
    allAnchors.forEach(anchor => anchor.addEventListener('click', this.getHref.bind(this)));
  }

  render() {
    return (
      <div id="app" className="app">
        <Header></Header>
        <NavTabs></NavTabs>
        <div id="main">
          <BodyUsage></BodyUsage>
          {/* <BodyPlanAndBills></BodyPlanAndBills> */}
          {/* <BodyAddons></BodyAddons> */}
        </div>
        <Footer></Footer>
      </div>
    );
  }

  getHref = (e) => {
    console.log("clicked!");
    console.log(e);
    debugger;
    // let el = e.target;
    // while (el && !el.href) {
    //   el = el.parentNode;
    // }
    // if (el) {
    //   e.preventDefault();
    //   debugger;
      // this.history.push(el.href); // Modify current url to become url of link.
      // debugger;
      // changePage();
    // }
  }
}

export default App;
