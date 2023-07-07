//app.js

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import HomePage from './components/HomePage';
import LogInPage from './components/LogInPage';
import SignUpPage from './components/SignUpPage';
import SearchPage from './components/SearchPage';
import Profile from './components/Profile';
import BurritoReviewPage from './components/BurritoReviewPage';

function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/" component={HomePage} />
        <Route path="/login" component={LogInPage} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/search" component={SearchPage} />
        <Route path="/profile" component={Profile} />
        <Route path="/submitreview" component={BurritoReviewPage} />
      </Switch>
    </Router>
  );
}

export default App;
