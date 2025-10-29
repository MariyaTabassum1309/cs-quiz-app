import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import LoginPage from './pages/LoginPage';
import AboutPage from './pages/AboutPage';
import ProtectedRoute from './components/ProtectedRoute';
import './App.css';

// Component to handle redirection based on auth status
const AppContent = () => {
  const { user } = useAuth();

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route 
          path="/login" 
          element={!user ? <LoginPage /> : <Navigate to="/" replace />} 
        />
        <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/quiz/:category" 
          element={
            <ProtectedRoute>
              <QuizPage />
            </ProtectedRoute>
          } 
        />
        <Route 
          path="/about" 
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          } 
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppContent />
      </Router>
    </AuthProvider>
  );
}

export default App;
