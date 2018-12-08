import React, { Component } from 'react';

class BlockFooter extends Component {
  render() {
    return (
      <div className="blockFooter">
        {Object.keys(this.props.bodyCopy).map(key => (
          <p key={key}>{this.props.bodyCopy[key]}</p>
        ))}
        <span className="btnHover">
          <button className="blockFooterBtn">
            LEARN MORE<i className="fas fa-play"></i>
          </button>
        </span>
      </div>
    );
  }
}

export default BlockFooter;
