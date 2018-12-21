import React, { Component } from 'react';
import BlockPlanUsage from './BlockPlanUsage';

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
