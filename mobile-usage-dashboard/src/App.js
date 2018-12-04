import React, { Component } from 'react';
import {
  Header,
  NavTabs,
  BodyUsage,
  BlockFooter
} from './components';

import './css/stylesheet.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <Header></Header>
        <NavTabs></NavTabs>
        <BodyUsage></BodyUsage>
        <footer>
          <BlockFooter bodyCopy={['Effective August 30, 2018', 'World Traveller and standard roaming rates will be changing.']}></BlockFooter>
          <BlockFooter bodyCopy={['Refer a friend and earn up to $210 a year.']}></BlockFooter>
        </footer>
      </div>
    );
  }
}

export default App;
