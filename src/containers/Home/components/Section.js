import React from 'react';
import PropTypes from 'prop-types';

export default class Section extends React.Component {
  static propTypes = {
    title: PropTypes.string
  }

  render() {
    const { title } = this.props;

    return (
      <div className="section">
        {title}
      </div>
    );
  }
}
