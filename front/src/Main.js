import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Ranking from './ranking/Ranking'
import Game from './game/Game'
import Round from './game/Round'

class Main extends Component {
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/ranking' component={Ranking} />
            <Route path='/game' component={Game} />
            <Route path='/round' component={Round} />
            <Redirect from='*' to='/' />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default Main