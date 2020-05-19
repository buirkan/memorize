import React, { Component } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import Home from './Home'
import Login from './login/Login'
import RegisterUser from './login/Register'
import Ranking from './ranking/Ranking'
import Game from './game/Game'

class Main extends Component {
    render() {
        return (
            <div>
                <BrowserRouter>
                    <Switch>
                        <Route path='/' exact={true} component={Home} />
                        <Route path='/ranking' component={Ranking} />
                        <Route path='/login' component={Login} />
                        <Route path='/login/newUser' component={RegisterUser} />
                        <Route path='/game' component={Game} />
                        
                        <Redirect from='*' to='/' />
                    </Switch>
                </BrowserRouter>
            </div>
        )
    }
}

export default Main