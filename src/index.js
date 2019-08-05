import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route, withRouter } from 'react-router-dom';
import AuthorQuiz from './AuthorQuiz';
import Home from './components/Home';
import AddAuthorForm from './components/AddAuthorForm';
import * as serviceWorker from './serviceWorker';
import {shuffle, sample} from 'underscore'; 

const authors = [
  {
    name: "Mark Twain", 
    imageUrl: "https://images.gr-assets.com/authors/1322103868p5/1244.jpg", 
    imageSource: "somewhere",
    books: ['The adventures of Huckleberry Finn', 'Life on the Mississippi', 'Roughing It', 'The Innocents Abroad', 'Following the Equator', 'Tom Sawyer Abroad']
  }, {
    name: "J.K. Rowling",
    imageUrl: "https://hips.hearstapps.com/digitalspyuk.cdnds.net/16/45/1478851686-jk-rowling.jpg?crop=0.661xw:0.967xh;0.164xw,0.0328xh&resize=480:*",
    imageSource: "somewhere",
    books: ["Harry Potter and the Sorcerer's Stone", "Harry Potter and the Chamber of Secrets", "Harry Potter and the Prisoner of Azkaban", "Harry Potter and the Goblet of Fire", "Harry Potter and the Order of the Phoenix", "Harry Potter and the Half-blood Prince", "Harry Potter and the Deathly Hallows"]
  }, {
    name: "Charles Dickens", 
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Dickens_Gurney_head.jpg",
    imageSource: "Wikimedia",
    books: ['Great Expectations', 'A Christmas Carol', 'Oliver Twist', 'David Copperfield', 'Hard Times', 'Our Mutual Friend', 'The Old Curiosity Shop']
  }
];

function getTurnData(authors) {
  const allBooks = authors.reduce(function (p,c,i) {
    return p.concat(c.books);
  }, []);

  const fourRandomBooks = shuffle(allBooks).slice(0, 4); 
  const answer = sample(fourRandomBooks);

  return {
    books: fourRandomBooks,
    author: authors.find((author) => 
      author.books.some((title) => 
        title === answer 
      )
    )
  }
}

function resetState() {
  return {
    turnData: getTurnData(authors),
    highlight: ''
  };
}

let state = resetState();

function onAnswerSelected(answer) {
  const isCorrect = state.turnData.author.books.some((book) => book === answer);
  state.highlight = isCorrect ? 'correct' : 'wrong';
  render(); 
}

function App() {
  return <AuthorQuiz {...state} 
  onAnswerSelected={ onAnswerSelected } 
  onContinue={ () => {
    state = resetState();
    render();
  } }/>;
}

// intermediary to add props 
const AuthorWrapper = withRouter(({ history }) => 
  <AddAuthorForm onAddAuthor={(author) => {
    authors.push(author);
    history.push('/');
    }} />
);

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <React.Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/questions' component={App} />
        <Route path='/add' component={AuthorWrapper} />
      </React.Fragment>
    </BrowserRouter>, document.getElementById('root'));
}

render(); 
    
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
