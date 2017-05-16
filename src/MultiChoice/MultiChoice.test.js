import React from 'react';
import ReactDOM from 'react-dom';
import MultiChoice from './MultiChoice';

it('renders without crashing', () => {
  var sampleData = [
    {
      question: 'What is the capital of Afganistan?',
      correctAnswer: 'Kabul',
      possibleAnswers: ['Tirana', 'Yerevan', 'Kabul', 'Gaborone'],
    },
  ];
  const div = document.createElement('div');
  ReactDOM.render(<MultiChoice answers={sampleData[0].possibleAnswers} />, div);
});
