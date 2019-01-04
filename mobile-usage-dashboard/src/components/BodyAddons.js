import React, { Component } from 'react';
import BlockInfo from './BlockInfo';
import BlockPlanUsage from './BlockPlanUsage';
import BlockTitle from './BlockTitle';
import BlockTextList from './BlockTextList ';

class BodyAddons extends Component {
  currentAddons = [
    { level: 1, item: "Currently you have no addons" }
  ];
  render() {
    return (
      <main className="body bodyPlanAndBills">
        <div className="column">
          <BlockTextList
            title="Your Current Addons"
            listArray={this.currentAddons}></BlockTextList> 
          <BlockPlanUsage></BlockPlanUsage>
        </div>
        <div className="column">
          <BlockInfo
            title="Visual Voicemail"
            body="$4"
            unit="/month"
            action="Add to my Plan"
            info="Visual Voicemail is a service that allows you to listen to and manage your voicemail messages from your device, without having to dial-in. The service is only available to customers with an iPhone 5s or newer iPhone device, and subscribe to a plan with a data allotment. Visual Voicemail is only accessible over a cellular network and uses data, which may result in additional charges while roaming."></BlockInfo>
          <BlockInfo
            title="World Saver Talk & Text"
            body="$8"
            unit="/month"
            action="Add to my Plan"
            info="Unlimited international text and reduced calling rates to over 200 countries and territories."></BlockInfo>
          <BlockTitle title="Manage 1-time Pass"></BlockTitle>
          <BlockTitle title="Manage Feature"></BlockTitle>
        </div>
      </main>
    );
  }
}

export default BodyAddons;
