import React, { Component } from 'react';

class BlockTextList extends Component {

  render() {
    const { title, listArray } = this.props;
    return (
      <div className="block blockTextList">
        <h3>{ title }</h3>
        <ul>
          {listArray.map((e,key) => (
            <li key={key}>
              <span className={`level${e.level}`}>&ndash;</span>{e.item}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default BlockTextList;
