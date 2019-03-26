'use strict'

import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './components/home'
import NoMatch from './components/noMatch'
import './App.css'

class App extends Component{
    render(){
      return(
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/api/home/app" component={Home} />
                <Route exaxt path= "api/process/huh" component={NoMatch}/>
            </Switch>
        </div>
      )
    }
  }

  export default App