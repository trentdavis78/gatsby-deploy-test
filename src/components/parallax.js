import React, { Component } from 'react';


export class parallax extends Component {

  render() {
    return (
        <div className="parallax-container">
        <div className="valign-wrapper" style={{height: "100%"}}>
          {this.props.children}
          <div className="parallax lighten-1">
            <img src={this.props.imgPath} alt={this.props.altTag} />
          </div>
        </div>
      </div>
    )
  }
}

export default parallax
