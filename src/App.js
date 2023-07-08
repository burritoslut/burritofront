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
        <Route exact path="/login" component={LogInPage} />
        <Route exact path="/signup" component={SignUpPage} />
        <Route exact path="/search" component={SearchPage} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/submitreview" component={BurritoReviewPage} />
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
