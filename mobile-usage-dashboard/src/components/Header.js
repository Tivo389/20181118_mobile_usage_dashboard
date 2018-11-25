import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <header className="header">
        <img className="headerLogo" src={require('./../images/logo_openMobile.svg')} alt="dataGO Logo" />
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
