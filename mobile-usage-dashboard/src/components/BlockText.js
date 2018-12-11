import React, { Component } from 'react';

class BlockTextList extends Component {

  render() {
    const { title, list } = this.props;
    return (
      <div className="block BlockTextList">
        <h3>{ title }</h3>
        <div>
          {/* list goes here */}
        </div>
      </div>
    );
  }
}

export default BlockTextList;
