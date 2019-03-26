'use strict'

import App from './App'
import './assests/fonts'
import './assests/css/bootstrap.css'
import './assests/js/main'
import './App.css'

import React from 'react'
import ReactDOm from 'react-dom'
import {Provider} from 'react-redux'
import {store, history} from './redux/store'
import {Switch, Route} from 'react-router-dom'
import {ConnectedRouter} from 'react-router-redux'
import registerServiceWorker from './registerServiceWorker'
///https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app
///More info on what the serviceworker is

///Encapsulating the store we created,
///into the Provider component, 
///which is provided by react-redux

ReactDOM.render((
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route path='/' component={App} />
            </Switch>
        </ConnectedRouter>
        <App />
    </Provider>
), document.getElementById('root'))

registerServiceWorker()

