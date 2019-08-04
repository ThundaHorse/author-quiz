import React from 'react';
import { Link } from 'react-router-dom';
import './style/App.css';
import './style/bootstrap.min.css';

// Import necessary components from Turn which has all imported 
import { Turn, Footer, Hero } from './components/Turn';

function Continue() {
  return (<div />);
}

function App({turnData, highlight, onAnswerSelected }) {
  return (
    <div className="container-fluid">
      <Hero />
      <Turn {...turnData} highlight= {highlight} onAnswerSelected={onAnswerSelected} />
      <Continue />
      <p><Link to='/add'>Add Author</Link></p>
      <Footer />
    </div>
  );
}

export default App;