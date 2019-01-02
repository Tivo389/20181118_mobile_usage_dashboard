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
  state = {
    activeSection: "usage"
  };

  componentDidMount() {
    const allAnchors = Array.from(document.querySelectorAll('a'));
    const currentLocation = this.history.location.pathname;
    allAnchors.forEach(anchor => anchor.addEventListener('click', this.updateURL.bind(this)));
    this.setState({
      activeSection: currentLocation.slice(1,currentLocation.length-5).toLowerCase()
    });
  }

  render() {
    return (
      <div id="app" className="app">
        <Header></Header>
        <NavTabs activeSection={this.state.activeSection}></NavTabs>
        <div id="main">
          { this.assignActiveSection() }
        </div>
        <Footer></Footer>
      </div>
    );
  }

  assignActiveSection() {
    switch (this.state.activeSection) {
      case 'usage':       return <BodyUsage></BodyUsage>;               break;
      case 'planandbill': return <BodyPlanAndBills></BodyPlanAndBills>; break;
      case 'addons':      return <BodyAddons></BodyAddons>;             break;
      default:            return <BodyUsage></BodyUsage>;
    }
  }    

  updateURL = (e) => {
    let target = e.target;
    // Since you might have clicked on a <p> or <img> element inside the <a> tag.
    // 01: Keep bubbling up until you reach the <a> element.
    while (target && !target.href) { target = target.parentNode; }
    // 02: Once you have the <a> tag, update current urlPath.
    if (target) {
      e.preventDefault();
      const href = target.getAttribute('href');
      this.history.push(href, null);
      this.setState({
        activeSection: href.slice(0, href.length-5).toLowerCase()
      });
    }
  }
}

export default App;
