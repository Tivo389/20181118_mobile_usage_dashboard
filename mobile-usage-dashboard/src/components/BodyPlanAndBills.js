import React, { Component } from 'react';
import BlockInfo from './BlockInfo';
import BlockPlanInfo from './BlockPlanInfo';
import BlockTitle from './BlockTitle';
import BlockTextList from './BlockTextList ';

class BodyUsage extends Component {
  planFeatures = [
    { level: 1, item: "Voicemail" }, 
    { level: 1, item: "Call Control"},
    { level: 2, item: "Caller ID"},
    { level: 2, item: "Missed Call Alerts"},
    { level: 2, item: "Conference Calling"},
    { level: 2, item: "Call Forwarding"},
    { level: 2, item: "Call Waiting"},
    { level: 1, item: "Access to 100,000+ Wifi Hotspots" } 
  ];
  payPerUseRates = [
    { level: 1, item: "15¢/min Canada & US" }, 
    { level: 1, item: "5¢/text Canada & US & Global"},
    { level: 1, item: "5¢/MB Data" } 
  ];
  render() {
    return (
      <main className="body bodyPlanAndBills">
      <div className="column">
        <BlockPlanInfo
          title="Your Current Plan"
          body="Home 250"
          unit="MB"
          action="Change Plan"></BlockPlanInfo>
        <div className="columnRow">
          <BlockTextList
            title="Additional Plan Features"
            listArray={this.planFeatures}></BlockTextList> 
          <BlockTextList
            title="Pay Per Use Rates"
            listArray={this.payPerUseRates}></BlockTextList> 
        </div>
      </div>
      <div className="column">
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
      </div>
      </main>
    );
  }
}

export default BodyUsage;
