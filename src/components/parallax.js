import React, { Component } from 'react';

export class parallax extends Component {
  constructor(props) {
    super(props);

    this.M = window.M; /*"window.M" will make sure that you have access to the M included in the earlier materialize cdn script tag, so that you don't get errors like "M is undefined" */
  }
  componentDidMount() {
    var elems1 = document.querySelectorAll(".parallax");
    var instances1 = this.M.Parallax.init(elems1);
  }
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
