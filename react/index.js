import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './components/home'
import Quest1 from './components/quest1'
import Quest2 from './components/quest2'

ReactDOM.render(
    <div>
        <h1 className="text-center"><strong>Fundwave Assignment</strong></h1>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/quartername' component={Quest1} />
                <Route path='/timeperiod' component={Quest2} />
            </Switch>
        </BrowserRouter>
    </div>,
    document.getElementById('react-app')
)
