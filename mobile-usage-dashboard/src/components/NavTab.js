import React, { Component } from 'react';

class NavTab extends Component {
  render() {
    const { body, href } = this.props;
    return (
      <a className={this.checkClass()} href={href}>
        <p>{body}</p>
      </a>
    );
  }

  checkClass() {
    const { href, activeSection } = this.props;
    const activeTab = href.slice(0, href.length-5).toLowerCase().includes(activeSection);
    return activeTab ? 'navTab active' : 'navTab';
  }
}

export default NavTab;
