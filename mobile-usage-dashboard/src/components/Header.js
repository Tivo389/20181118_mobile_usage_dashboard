import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header>
        <a href="index.html">
          <img
            className="headerLogo"
            src={require('./../images/logo_openMobile.svg')}
            alt="dataGO Logo" />
        </a>
        <div className="navMenuIcon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </header>
    );
  }
}

export default Header;
