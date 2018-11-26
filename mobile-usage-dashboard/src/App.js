import React, { Component } from 'react';
import {
  Header,
  NavTabs,
  BodyUsage,
  Footer
} from './components';

import './css/stylesheet.css';

class App extends Component {
  render() {
    return (
      <div id="app" className="app">
        <Header></Header>
        <NavTabs></NavTabs>
        <BodyUsage></BodyUsage>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
