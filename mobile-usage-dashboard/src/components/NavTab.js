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
    const onIndexPage = window.location.href.toLowerCase().includes('index') &&
                        href.slice(0, href.length-5).toLowerCase().includes('usage');
    if (onIndexPage) {
      return 'navTab active';
    } else if (activeTab) {
      return 'navTab active';
    } else {
      return 'navTab';
    }
  }
}

export default NavTab;
