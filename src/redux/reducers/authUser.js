'use strict'
///AuthUser reducer and state holding current user, authentication status and thier profile

const initialState = {
    user: {},
    isAuthenticated: false,
    profile: {},
    documents: []
}

export default function (state=initialState, action) {

    switch (action.type) {

        case 'SET_USER':
            return {
                ...state,
                isAuthenticated: Object.keys(action.user).length > 0 ? true :false,
                user: action.user
            }

        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.profile
            }
        
        case 'SET_DOCUMENTS':
            return {
                ...state,
                documents: action.documents
            }

        case 'FOLLOW_USER':
            let user = Object.assign({}, state.user)
            user.following.push(action.user_id)
            return {
                ...state,
                user: user
            }

        default:
            return state
    }
}