import React, { Component } from 'react';
import BlockData from './BlockData';
import BlockInfo from './BlockInfo';
import BlockTitle from './BlockTitle';

class BodyUsage extends Component {
  render() {
    return (
      <main className="body bodyUsage">
        <BlockInfo
          title="Your Phone Number"
          body="771-513-5175"
          unit=""
          action=""></BlockInfo>
        <BlockData></BlockData>
        <BlockInfo
          title="Next Billing Cycle In"
          body="12"
          unit="days"
          action="View Billing History"></BlockInfo>
        <BlockInfo
          title="Current Charges"
          body="$11.42"
          unit=""
          action="Pay Now"></BlockInfo>
        <BlockInfo
          title="Your Current Plan"
          body="Home 250"
          unit="MB"
          action="Change Plan"></BlockInfo>
        <BlockTitle
          title="Usage History"></BlockTitle>
      </main>
    );
  }
}

export default BodyUsage;
