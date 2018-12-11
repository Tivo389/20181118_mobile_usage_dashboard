import React, { Component } from 'react';
import BlockInfo from './BlockInfo';
import BlockPlanInfo from './BlockPlanInfo';
import BlockTitle from './BlockTitle';
import BlockText from './BlockText';

class BodyUsage extends Component {
  planFeatures = {
    // 999
// - Voicemail
// - Call Control
// - Caller ID
// - Missedn Call Alerts
//    - Conference Calling
//    - Call Forwarding
//    - Call Waiting
// - Access 100,000+ Wifi Hotspots
  };
  render() {
    return (
      <main className="body bodyPlanAndBills">
        <BlockPlanInfo
          title="Your Current Plan"
          body="Home 250"
          unit="MB"
          action="Change Plan"></BlockPlanInfo>
        <BlockText
          title="Additional Plan Features"
          text={this.planFeatures}></BlockText> 
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
        <BlockTitle title="Payment History"></BlockTitle>
        <BlockTitle title="Manage Auto History"></BlockTitle>
      </main>
    );
  }
}

export default BodyUsage;
