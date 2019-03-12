'use strict'

import {applyMiddleware, createStore} from 'redux'
import {composeWithDevTools} from 'react-devtools-extension/developmentOnly'
import reducer from './reducer'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'

///Import our reducer, and we pass it as an arg
///to createStore

export const history = createHistory()
export const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

