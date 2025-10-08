import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="container">
        <div className="about-content">
          <h1>About CS-QUIZ</h1>
          
          <section className="about-section">
            <h2>🎯 What is CS-QUIZ?</h2>
            <p>
              CS-QUIZ is an interactive web application designed to test and enhance 
              your knowledge in various computer science domains. Whether you're a 
              student preparing for exams or a professional looking to refresh your 
              knowledge, our quizzes provide an engaging learning experience.
            </p>
          </section>

          <section className="about-section">
            <h2>⚡ How It Works</h2>
            <div className="features-grid">
              <div className="feature">
                <h3>1. Choose Category</h3>
                <p>Select from 9 different computer science categories</p>
              </div>
              <div className="feature">
                <h3>2. Take Quiz</h3>
                <p>Answer 10 random questions with a 3-minute time limit</p>
              </div>
              <div className="feature">
                <h3>3. Get Results</h3>
                <p>Review your answers and learn from mistakes</p>
              </div>
            </div>
          </section>

          <section className="about-section">
            <h2>⏱️ Time Limit & Rules</h2>
            <ul className="rules-list">
              <li>Each quiz has a strict 3-minute time limit</li>
              <li>Quiz auto-submits when time expires</li>
              <li>You can navigate between questions freely</li>
              <li>Answers are saved as you select them</li>
              <li>Review correct answers after submission</li>
            </ul>
          </section>

          <section className="about-section">
            <h2>📚 Available Categories</h2>
            <div className="categories-list">
              <div className="category-item">Data Structures & Algorithms</div>
              <div className="category-item">Computer Architecture</div>
              <div className="category-item">Java Programming</div>
              <div className="category-item">C Programming</div>
              <div className="category-item">Python Programming</div>
              <div className="category-item">C++ Programming</div>
              <div className="category-item">Operating Systems</div>
              <div className="category-item">Computer Networks</div>
              <div className="category-item">Database Management Systems</div>
            </div>
          </section>

          <section className="about-section">
            <h2>🎓 Learning Objectives</h2>
            <p>
              Our goal is to help you strengthen fundamental computer science concepts, 
              improve problem-solving skills, and prepare for technical interviews and 
              academic examinations through practical, timed quizzes.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;