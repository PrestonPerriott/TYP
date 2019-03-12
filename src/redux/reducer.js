'use strict'

import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux' 
import documents from './reducers/documents'
import authUser from './reducers/authUser'
import common from './reducers/common'

///Combining all our reducers into a single reducer
export default combineReducers({

    documents,
    authUser,
    common,
    router: routerReducer
})