import React, { Component } from 'react';
import BlockPlanUsage from './BlockPlanUsage';
import BlockInfo from './BlockInfo';
import BlockTitle from './BlockTitle';

class BlockPlanAddon extends Component {
  render() {
    return (
      <main className="body blockPlanAddon">
        <BlockPlanUsage></BlockPlanUsage>
      </main>
    );
  }
}

export default BlockPlanAddon;
