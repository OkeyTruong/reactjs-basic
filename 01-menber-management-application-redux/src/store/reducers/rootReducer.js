import React from 'react'

const initialState = {
    members:[
        {id:1, name:"Huy"},
        {id:2, name:"Okey"},
        {id:3, name:"lh222k"},
    ]
}
const rootReducer = (state = initialState , action) => {
    switch (action.type){
        case "DELETE_MEMBER":
            let members = state.members;
            members = members.filter(item=>item.id !== action.payload.id)
            return {
                ...state,members
            }
        case "CREATE_MEMBER":
            let id = Math.floor(Math.random() * 100)
            let member = {
                id:id,
                name:`Random - ${id}`
            }
            return {
                ...state,
                members:[
                    ...state.members, member
                ]
            }

        default:
            return state
    }
}

export default rootReducer