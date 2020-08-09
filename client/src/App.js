import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import MessageForm from './components/MessageForm'
import MessageList from './components/MessageList'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={MessageList} />
        <Route exact path="/new-message" component={MessageForm} />
      </Switch>
    </Router>
  );
}

export default App;
