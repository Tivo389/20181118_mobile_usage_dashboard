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

  componentDidMount() {
    const allAnchors = Array.from(document.querySelectorAll('a'));
    console.log(allAnchors);
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
    let target = e.target;
    // Since you might have clicked on a <p> or <img> element inside the <a> tag.
    // 01: Keep bubbling up until you reach the <a> element.
    while (target && !target.href) {
      target = target.parentNode;
    }
    // 02: Once you have the <a> tag, update current urlPath.
    if (target) {
      e.preventDefault();
      this.history.push(target.getAttribute('href'), null);
      // changePage();
    }
  }
}

export default App;
