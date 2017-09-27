import React, { Component } from 'react';
import HomeTitle from './components/HomeTitle';
import Section from './components/Section';
import webJson from './webData.json';
import './Home.sass';

export default class Home extends Component {
  render() {
    return (
      <div id="pageHome">
        <HomeTitle />
        <Section title="小遊戲" dataList={webJson.games} />
        <Section />
        <Section />
        <Section />
      </div>
    );
  }
}
