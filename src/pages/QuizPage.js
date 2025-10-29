import React, { useState, useEffect, useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { quizData } from '../data/quizData';
import Timer from '../components/Timer';
import QuestionStatus from '../components/QuestionStatus';
import './QuizPage.css';

const QuizPage = () => {
  const { category } = useParams();
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizStarted, setQuizStarted] = useState(false);

  // ✅ useMemo ensures questions is not recreated every render
  const questions = useMemo(() => quizData[category] || [], [category]);
  const totalQuestions = questions.length;

  useEffect(() => {
    if (!questions.length) {
      navigate('/');
    }
  }, [questions.length, navigate]); // ✅ depend on length only

  const handleAnswerSelect = (questionIndex, optionIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: optionIndex
    }));
  };

  const handleSubmit = () => setShowResults(true);
  const handleTimeUp = () => setShowResults(true);
  const handleStartQuiz = () => setQuizStarted(true);
  const handleQuestionClick = (questionIndex) => setCurrentQuestion(questionIndex);

  const calculateScore = () => {
    let score = 0;
    questions.forEach((question, index) => {
      if (selectedAnswers[index] === question.correctAnswer) score++;
    });
    return score;
  };

  if (!quizStarted) {
    return (
      <div className="quiz-page">
        <div className="container">
          <div className="quiz-start">
            <h1>Ready for the Quiz?</h1>
            <p>Category: {category.replace(/-/g, ' ').toUpperCase()}</p>
            <p>Total Questions: {totalQuestions}</p>
            <p>Time Limit: 3 minutes</p>
            <button className="start-btn" onClick={handleStartQuiz}>
              Start Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="quiz-page">
        <div className="container">
          <div className="results">
            <h1>Quiz Results</h1>
            <div className="score-card">
              <h2>Your Score: {score}/{totalQuestions}</h2>
              <p className="score-percentage">
                {((score / totalQuestions) * 100).toFixed(1)}%
              </p>
            </div>

            <div className="answers-review">
              <h3>Review Answers:</h3>
              {questions.map((question, index) => {
                const userAnswer = selectedAnswers[index];
                const isCorrect = userAnswer === question.correctAnswer;
                return (
                  <div key={question.id} className="answer-item">
                    <div className="question-text">
                      {index + 1}. {question.question}
                    </div>
                    <div className="answer-comparison">
                      <div className={`user-answer ${isCorrect ? 'correct' : 'wrong'}`}>
                        Your Answer:{' '}
                        {userAnswer !== undefined
                          ? question.options[userAnswer]
                          : 'Not answered'}
                      </div>
                      {!isCorrect && (
                        <div className="correct-answer">
                          Correct Answer: {question.options[question.correctAnswer]}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="back-home-btn" onClick={() => navigate('/')}>
              Back to Home
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentQuestion];

  return (
    <div className="quiz-page">
      <div className="container">
        <div className="quiz-layout">
          <div className="quiz-main">
            <Timer initialTime={180} onTimeUp={handleTimeUp} />
            <div className="quiz-progress">
              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${((currentQuestion + 1) / totalQuestions) * 100}%` }}
                ></div>
              </div>
              <div className="progress-text">
                Question {currentQuestion + 1} of {totalQuestions}
              </div>
            </div>

            <div className="question-card">
              <h2 className="question-text">{currentQ.question}</h2>
              <div className="options-grid">
                {currentQ.options.map((option, index) => (
                  <div
                    key={index}
                    className={`option ${
                      selectedAnswers[currentQuestion] === index ? 'selected' : ''
                    }`}
                    onClick={() => handleAnswerSelect(currentQuestion, index)}
                  >
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="option-text">{option}</span>
                  </div>
                ))}
              </div>

              <div className="navigation-buttons">
                <button
                  className="nav-btn"
                  onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                  disabled={currentQuestion === 0}
                >
                  Previous
                </button>

                {currentQuestion === totalQuestions - 1 ? (
                  <button className="submit-btn" onClick={handleSubmit}>
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    className="nav-btn"
                    onClick={() => setCurrentQuestion(prev =>
                      Math.min(totalQuestions - 1, prev + 1)
                    )}
                  >
                    Next
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="quiz-sidebar">
            <QuestionStatus
              questions={questions}
              currentQuestion={currentQuestion}
              selectedAnswers={selectedAnswers}
              onQuestionClick={handleQuestionClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
