import React, { Component } from 'react';

class NavTab extends Component {
  activeTab = false;
  className = null;  // ternary here?

  componentWillMount() {
    const { href, activeSection } = this.props;
    this.activeTab = href.includes(activeSection);
    // 999
    // COntinue here, set the calss name ad make the tabs active
  }

  componentWillUpdate() {
  }

  render() {
    const { body, activeSection, href } = this.props;
    return (
      <a className={activeSection} href={href}>
        <p>{body}</p>
      </a>
    );
  }
}

export default NavTab;
