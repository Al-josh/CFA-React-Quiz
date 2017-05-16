import React, { Component } from 'react';
import './App.css';
import Question from '../Question/Question';
import ProgressBar from '../ProgressBar/ProgressBar';
import MultiChoice from '../MultiChoice/MultiChoice';
import Results from '../Results/Results';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      selected: 'None yet!',
      score: 0,
    };
    this.updateSelected = this.updateSelected.bind(this);
    this.submitAnswer = this.submitAnswer.bind(this);
    this.retryQuiz = this.retryQuiz.bind(this);
    this.quizData = [
      {
        question: 'What is the capital of Afganistan?',
        correctAnswer: 'Kabul',
        possibleAnswers: ['Tirana', 'Yerevan', 'Kabul', 'Gaborone'],
      },
      {
        question: 'What is the capital of Burkina Faso?',
        correctAnswer: 'Ouagadougou',
        possibleAnswers: ['Bujumbura', 'Ouagadougou', 'Bangui', 'Kinshasa'],
      },
      {
        question: 'What is the capital of Ecuador?',
        correctAnswer: 'Quito',
        possibleAnswers: ['Quito', 'Malabo', 'San Salvador', 'Astana'],
      },
      {
        question: 'What is the capital of Mauritania?',
        correctAnswer: 'Nouakchott',
        possibleAnswers: ['Podgorica', 'Chisinau', 'Port Louis', 'Nouakchott'],
      },
      {
        question: 'What is the capital of Nigeria?',
        correctAnswer: 'Abuja',
        possibleAnswers: ['Melekeok', 'Abuja', 'San Salvador', 'Kigali'],
      },

    ];
  };

  submitAnswer() {
    if (this.state.selected === this.quizData[this.state.progress].correctAnswer) {
      this.setState({
        score: this.state.score + 1,
        progress: this.state.progress + 1,
        selected: 'None yet!',
      });
    } else {
      this.setState({
        progress: this.state.progress + 1,
        selected: 'None yet!'
      });
    }
  }

  updateSelected(answer) {
    this.setState({
      selected: answer,
    });
  }

  retryQuiz() {
    this.setState({
      progress: 0
    });
  }

  render() {
    return (
      <div className="text-center">
        <div className="white-box">
          <img src="earth.png" height="200px" />
        <h2>Quiz App</h2>

        {this.state.progress < this.quizData.length ? (
          <div>
            <Question currentQuestion={this.quizData[this.state.progress].question} />
            <ProgressBar currentStep={this.state.progress + 1} questionLength={this.quizData.length} />
            <MultiChoice
              answers={this.quizData[this.state.progress].possibleAnswers}
              updateSelected={this.updateSelected}
              handleSubmit={this.submitAnswer}
              selectedAnswer={this.state.selected} />
          </div>
        )
        : (
        <Results score={this.state.score} endMessage="Congratulations, you have finished!" retryButton={this.retryQuiz}/>
         )}
         </div>
      </div>
    );
  }
}
export default App;
