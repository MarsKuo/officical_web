import React, { Component } from 'react';
import Protypes from 'prop-types';

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

    return (
      <div>
        <div>{name}</div>
        <div>{description}</div>
        <img src={img} alt={name} />
        <a href={demoUrl}>DEMO</a>
        <a href={repoUrl}>Repo</a>
      </div>
    );
  }
}
