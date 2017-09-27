import React, { Component } from 'react';
import Header from './components/Header.js';
import Content from './components/Content.js';
// import './Home.less';
import './Home.scss';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <Header />
        <Content />
      </div>
    );
  }
}
