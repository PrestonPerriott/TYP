'use strict'
///Document reducer & state holding document currently being viewed
///Will also hold an array of Docs from backend

const initialState = {
    documents: [],
    document: {}
}

export default function (state=initialState, action) {

    switch (action.type) {

        case 'LOAD_DOCUMENTS':
        return {
            ...state,
            documents: action.documents
        }

        case 'VIEW_DOCUMENT':
        return  {
            ...state,
            document: action.document
        }
        case 'COMMENT_DOCUMENT':
        default:
            return state
    }
}