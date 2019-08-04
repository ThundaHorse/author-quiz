import React from 'react';
import { Link } from 'react-router-dom';
import './style/App.css';
import './style/bootstrap.min.css';

// Import necessary components from Turn which has all imported 
import { Turn, Footer, Hero, Continue } from './components/Turn';

function AuthorQuiz({turnData, highlight, onAnswerSelected, onContinue }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight= {highlight} onAnswerSelected={onAnswerSelected} />
      <Continue show={highlight === 'correct'} onContinue={onContinue}/>
      <p><Link to='/add'>Add Author</Link></p>
      <Footer />
    </div>
  );
}

export default AuthorQuiz;