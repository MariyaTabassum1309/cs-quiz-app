import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { categories } from '../data/quizData';
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const handleCategoryClick = (categoryId) => {
    navigate(`/quiz/${categoryId}`);
  };

  return (
    <div className="home-page">
      <div className="container">
        <div className="hero-section">
          <h1 className="hero-title">
            Welcome{user ? `, ${user.username}` : ''} to CS-QUIZ
          </h1>
          <p className="hero-subtitle">
            Test your computer science knowledge across various domains. 
            Challenge yourself with timed quizzes and improve your skills!
          </p>
          {user && (
            <div className="user-info">
              <p><strong>Field of Study:</strong> {user.study}</p>
              <p><strong>Semester:</strong> {user.semester}</p>
              <p><strong>Email:</strong> {user.email}</p>
            </div>
          )}
        </div>

        <div className="categories-grid">
          {categories.map((category) => (
            <div 
              key={category.id}
              className="category-card"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="category-icon">{category.icon}</div>
              <h3 className="category-name">{category.name}</h3>
              <p className="category-description">{category.description}</p>
              <div className="category-meta">
                <span>10 Questions</span>
                <span>•</span>
                <span>3 Minutes</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;