import React, { Component } from 'react';
import Protypes from 'prop-types';
import FontAwesome from 'react-fontawesome';


import './Card.sass';

export default class Card extends Component {
  static propTypes = {
    name: Protypes.string,
    description: Protypes.string,
    img: Protypes.string,
    demoUrl: Protypes.string,
    repoUrl: Protypes.string
  }
  render() {
    const {
      name,
      description,
      img,
      demoUrl,
      repoUrl
    } = this.props;
    const bgStyle = {
      backgroundImage: `URL("${img}")`
    };

    return (
      <div className="card">
        <div className="bgimg" style={bgStyle} />
        <div className="buttons">
          <a title="Demo" href={demoUrl} rel="noopener noreferrer" target="_blank">
            <div className="circle demo">
              <FontAwesome name="laptop" />
            </div>
          </a>
          <a title="Github" href={repoUrl} rel="noopener noreferrer" target="_blank">
            <div className="circle repo">
              <FontAwesome name="github-alt" />
            </div>
          </a>
        </div>
        <div className="cardInfo">
          <div className="title">{name}</div>
          <div className="des">{description}</div>
        </div>
      </div>
    );
  }
}
