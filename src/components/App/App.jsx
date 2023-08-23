import React from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import FeelingPage from '../FeelingPage/FeelingPage';
import UnderstandingPage from '../UnderstandingPage/UnderstandingPage';
import SupportedPage from '../SupportedPage/SupportedPage';
import CommentsPage from '../CommentsPage/CommentsPage';
import ReviewPage from '../ReviewPage/ReviewPage';



function App() {

  return (
    <div className='App'>
      <Router>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path='/' exact>
          <FeelingPage />
        </Route>

        <Route path='/understandingpage' >
          <UnderstandingPage />
        </Route>

        <Route path='/supportedpage' >
          <SupportedPage />
        </Route>

        <Route path='/commentspage' >
          <CommentsPage />
        </Route>

        <Route path='/reviewpage' >
          <ReviewPage />
        </Route>

      </Router>
    </div>
  );
}

export default App;
