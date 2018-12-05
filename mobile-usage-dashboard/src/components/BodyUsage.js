import React, { Component } from 'react';
import BlockTitle from './BlockTitle';
import BlockInfo from './BlockInfo';

class BodyUsage extends Component {
  render() {
    return (
      <main className="body bodyUsage">
        <BlockInfo
          title="YOUR CURRENT PLAN"
          body="Home 250"
          unit="MB"
          action="CHANGE PLAN"></BlockInfo>
        <BlockTitle
          title="Usage History"></BlockTitle>
        <p>blockOfData</p>
      </main>
    );
  }
}

export default BodyUsage;
