'use strict'

import axios from 'axios'
const url = process.env.NODE_ENV === 'PROD' ? '/api/' : 'http://localhost:3000/api/'
///For understanding the lifecycle of a react app and how it interacts with its store
///https://stackoverflow.com/questions/45950548/dispatch-vs-return-in-react-redux

///Should get all public documents
export function loadPublicDocuments () {
    /*https://daveceddia.com/what-is-a-thunk/   -If thunk notices that an action is a fucntion, it will call it. 
                                                Thunk then passes `dispatch` and `geState` to thunk functions,
                                                They can then dispatch new actions, and getState = current state  */

    return async function(dispatch) {

       var res = await axios.get(`${url}documents/`)
       let documents = res.data
       try {
        dispatch({
            type: 'LOAD_DOCUMENTS',
            documents
        })
       } catch (e) {
           ///TODO: Actually handle error
          console.log(e)  
       }  
    }
}

export function getPublicDocument(_id) {

    return async function() {
        try {
            var res = axios.get(`${url}documents/${_id}`)
            let document = res.data
            dispatch({
                type: 'VIEW_DOCUMENT',
                document 
            })
        } catch (err) {

        }
    }
}

export function getUser(_id) {

    return async function() {
        try {
            var res = await axios.get(`${url}user/${_id}`)
            return res.data
        }catch (e){
            console.log('Caught error: ' + e)
        }
    }

}

export function getUserProfile (_id) {

    return async function () {
        try {
        var res = await axios.get(`${url}user/profile/${_id}`)
        let profile = res.data
        dispatch({type: 'SET_PROFILE', profile})
        } catch (err) {
            console.log('There was an error fetching the users profile')
        }
    }
}

/* Seeing as profile will contain docs,
Might be easier to hit same endpoint,
And return only docs not whole profile? */
export function getUserDocuments (_id) {

    return async function () {
        try {
            ///Res might need to reroute to profile
            var res = await axios.get(`${url}user/documents/${_id}`)
            let docs = res.data['documents']
            dispatch({type: 'SET_DOCUMENTS', docs})
        } catch (e) {
            console.log('Found error in fetching user documents')
        }
    }
}

export function follow () {

}

export function comment () {

}

export function signInUser () {
    
}

export function toggleOpen () {

}

export function toggleClose () {

}