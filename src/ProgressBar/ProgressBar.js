import React, { Component } from 'react';

class ProgressBar extends Component {
  render() {
    return <p>{this.props.currentStep} out of {this.props.questionLength}</p>;
  }
}

export default ProgressBar;
