import {createSlice} from "@reduxjs/toolkit"

type likeArticlesState = {
    [id: number]: boolean
}

const initialState: likeArticlesState = {} 

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducers:{
        addLike: (state, action) => ({
            ...state,
            [action.payload]: true
        }),
        removeLike: (state, action) => ({
            ...state,
            [action.payload]: false
        }),
        removeFromLikePage: (state, action) => {
            let newObj = {...state}
            delete newObj[action.payload]
            return newObj
        }
    }
})

export const {addLike,removeLike, removeFromLikePage} = likeSlice.actions

export default likeSlice.reducer