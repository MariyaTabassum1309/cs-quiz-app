import React from 'react';
import './QuestionStatus.css';

const QuestionStatus = ({ 
  questions, 
  currentQuestion, 
  selectedAnswers, 
  onQuestionClick 
}) => {
  const getQuestionStatus = (index) => {
    if (selectedAnswers[index] !== undefined) {
      return 'answered';
    }
    return 'unanswered';
  };

  return (
    <div className="question-status">
      <h3>Question Status</h3>
      <div className="status-legend">
        <div className="legend-item">
          <div className="status-dot current"></div>
          <span>Current</span>
        </div>
        <div className="legend-item">
          <div className="status-dot answered"></div>
          <span>Answered</span>
        </div>
        <div className="legend-item">
          <div className="status-dot unanswered"></div>
          <span>Unanswered</span>
        </div>
      </div>
      
      <div className="questions-grid">
        {questions.map((_, index) => (
          <div
            key={index}
            className={`question-number ${
              getQuestionStatus(index)
            } ${currentQuestion === index ? 'current' : ''}`}
            onClick={() => onQuestionClick(index)}
          >
            {index + 1}
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuestionStatus;