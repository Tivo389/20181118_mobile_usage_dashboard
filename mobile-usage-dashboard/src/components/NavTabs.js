import React, { Component } from 'react';

class ComponentTemplate extends Component {
  render() {
    return (
      <div className="navTabs">
        <a className="navTab active" href="usage.html">
          <p>USAGE</p>
        </a>
        <a className="navTab" href="planAndBill.html">
          <p>PLANS &amp; BILLS</p>
        </a>
        <a className="navTab" href="addons.html">
          <p>ADDONS</p>
        </a>
      </div>
    );
  }
}

export default ComponentTemplate;
