import {createSlice} from "@reduxjs/toolkit"

type isOpenState = boolean

const initialState: isOpenState = false

export const likeSlice = createSlice({
    name:"isOpen",
    initialState,
    reducers:{
        toggleState: (state) => {
            return state ? false : true
        },
        setClose: (state) => {
            return state = false
        }
    }
})

export const {toggleState, setClose} = likeSlice.actions

export default likeSlice.reducer