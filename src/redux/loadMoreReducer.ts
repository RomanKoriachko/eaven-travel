import {createSlice} from "@reduxjs/toolkit"

type State = {
    count: number,
    height: number,
}

const initialState: State = {
    count: 10,
    height: 2510,
}

export const likeSlice = createSlice({
    name:"loadMore",
    initialState,
    reducers:{
        onLoadMoreClick: (state, action) => {
            return(
                void(state.count = action.payload.newCount + state.count),
                void(state.height = action.payload.newHeight + state.height)
            )
            
        }
    }
})

export const {onLoadMoreClick} = likeSlice.actions

export default likeSlice.reducer