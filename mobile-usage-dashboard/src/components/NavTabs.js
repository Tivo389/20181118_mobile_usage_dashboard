import React, { Component } from 'react';

class ComponentTemplate extends Component {
  render() {
    return (
      <div className="navTabs">
        <div className="navTab active">
          <p>USAGE</p>
        </div>
        <div className="navTab">
          <p>PLANS &amp; BILLS</p>
        </div>
        <div className="navTab">
          <p>ADDONS</p>
        </div>
      </div>
    );
  }
}

export default ComponentTemplate;
