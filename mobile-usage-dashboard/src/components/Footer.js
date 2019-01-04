import React, { Component } from 'react';
import BlockFooter from "./BlockFooter";

class Footer extends Component {
  render() {
    return (
      <footer>
        <BlockFooter bodyCopy={['Effective August 30, 2018', 'World Traveller and standard roaming rates will be changing.']}></BlockFooter>
        <BlockFooter bodyCopy={['Refer a friend and earn up to $210 a year.']}></BlockFooter>
        <BlockFooter bodyCopy={['Put a dummy here']}></BlockFooter>
      </footer>
    );
  }
}

export default Footer;
