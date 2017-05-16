import React, { Component } from 'react';

class MultiChoice extends Component {
  render() {
    return (
      <div>
        {this.props.answers.map((answer, i) => <button className="btn btn-primary margin" key={i} onClick={() => this.props.updateSelected(answer)}>{answer}</button>)}
        <br />
        <p>You have selected: {this.props.selectedAnswer}</p>
        <button className="btn btn-success" onClick={this.props.handleSubmit}>Submit</button>
      </div>
    );
  }
};

export default MultiChoice;
