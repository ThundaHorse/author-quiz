import React from 'react'; 
import { Link } from 'react-router-dom';

const buttonWrapper = {
  width: '300px'
};

const buttonRight = {
  float: 'right'
}

const buttonLeft = {
  float: 'left'
}

const headings = {
  textAlign: 'center'
}

function Home() {
  return <div className="home">
    <div className="container info">
        <br/>
      <div className="heading" style={headings}>
        <h1>Welcome to the Author Quiz!</h1>
        <h3>Where would you like to go?</h3>
      </div>
        <br/>
      <div className="buttons" style={headings}>
        <div className="container" style={buttonWrapper}>
          <button className="btn btn-md btn-round btn-light btn-outline-info" style={buttonLeft}>
            <Link to='/questions'>Start Quiz</Link> 
          </button>
          <button className="btn btn-md btn-round btn-light btn-outline-info" style={buttonRight}>
            <Link to='/add'>Add Authors</Link>
          </button>
        </div>
      </div>
    </div>
  </div>
}

export default Home;