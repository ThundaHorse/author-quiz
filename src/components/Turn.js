// Import components 
import React from 'react'; 
import Book from './Book';
import Hero from './Hero';
import Footer from './Footer';
import Home from './Home';
import Continue from './Continue';
import PropTypes from 'prop-types';

function Turn({ author, books, highlight, onAnswerSelected }) {
  function highlightBg(highlight) {
    const mapping = {
      'none': '', 
      'correct': 'green', 
      'wrong': 'red'
    }
    return mapping[highlight];
  }

  return (
    <div className="row turn" style={{ backgroundColor: highlightBg(highlight) }}>
      <div className="col-4 offset-1">
        <img src={author.imageUrl} className="authorimage" alt="Author" />
          <br/>
        <h4 style={{ textAlign: "center" }}>{author.name}</h4>
      </div>
      <div className="col-6">
        {books.map((title) => <Book title={title} key={title} onClick={onAnswerSelected} />)}
      </div>
    </div>
  );
}

Turn.propTypes = {
  author: PropTypes.shape({
    name: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired, 
    imageSource: PropTypes.string.isRequired, 
    books: PropTypes.arrayOf(PropTypes.string).isRequired
  }), 
  books: PropTypes.arrayOf(PropTypes.string).isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  highlight: PropTypes.string.isRequired
}

// Export as one 
export { Turn, Book, Hero, Home, Footer, Continue };