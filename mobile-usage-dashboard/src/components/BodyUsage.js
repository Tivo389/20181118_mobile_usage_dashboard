import React, { Component } from 'react';
import BlockTitle from './BlockTitle';
import BlockInfo from './BlockInfo';

class BodyUsage extends Component {
  render() {
    return (
      <main className="body bodyUsage">
        <BlockInfo></BlockInfo>
        <BlockTitle></BlockTitle>
        <p>blockOfData</p>
      </main>
    );
  }
}

export default BodyUsage;
