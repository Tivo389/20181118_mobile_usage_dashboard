import React, { Component } from 'react';
import NavTab from './NavTab';

class NavTabs extends Component {
  render() {
    return (
      <div className="navTabs">
        <NavTab
          body="USAGE"
          activeSection={this.props.activeSection}
          href="usage.html">
        </NavTab>
        <NavTab
          body="PLANS &amp; BILLS"
          activeSection={this.props.activeSection}
          href="planAndBill.html">
        </NavTab>
        <NavTab
          body="ADDONS"
          activeSection={this.props.activeSection}
          href="addons.html"
        ></NavTab>
      </div>
    );
  }
}

export default NavTabs;
