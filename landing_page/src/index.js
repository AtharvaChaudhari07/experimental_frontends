import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Dea58541f135e8c11580c05bbeff491e76c829c771df587618 from './views/dea58541f135e8c11580c05bbeff491e76c829c771df587618'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          component={Dea58541f135e8c11580c05bbeff491e76c829c771df587618}
          exact
          path="/"
        />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
