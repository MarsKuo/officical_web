import React, { Component } from 'react';
import logo from 'static/images/logo.png';
// import github from 'static/images/github.png';
import facebook from 'static/images/facebook.png';

export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">

          <a target="_blank" rel="noopener noreferrer" href="https://www.tisnet.com.tw">
            <img alt="logoHeader" src={logo} />
          </a>

        </div>
        <div className="link">
          <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/TISNet大同網際網路">
            <img alt="facebook" src={facebook} />
          </a>
        </div>
      </div>
    );
  }
}
