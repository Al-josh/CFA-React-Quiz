import React, { Component } from 'react';

class Question extends Component {
  render() {
    return <h4>{this.props.currentQuestion}</h4>;
  }
}

export default Question;
