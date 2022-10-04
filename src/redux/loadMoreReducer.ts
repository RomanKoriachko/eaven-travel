import {createSlice} from "@reduxjs/toolkit"
import articlesArray from "components/ArticlesSection/articlesArray"

type State = {
    count: number,
    firstColumn: number,
    secondColumn: number,
    thirdColumn: number,
    firstTabletColumn: number,
    secondTabletColumn: number,
}

const initialState: State = {
    count: 10,
    firstColumn: Math.round(articlesArray.length / 3) / 2,
    secondColumn: (Math.round(articlesArray.length / 3) * 2) / 2,
    thirdColumn: (Math.round(articlesArray.length / 3) * 3 - 1) / 2,
    firstTabletColumn:( Math.round(articlesArray.length / 2)/2),
    secondTabletColumn: (Math.round(articlesArray.length / 2) * 2 - 1) /2
}

export const likeSlice = createSlice({
    name:"loadMore",
    initialState,
    reducers:{
        onLoadMoreClick: (state) => {
            return(
                void(state.firstColumn = state.firstColumn * 2),
                void(state.secondColumn = state.secondColumn * 2),
                void(state.thirdColumn = state.thirdColumn * 2),
                void(state.firstTabletColumn = state.firstTabletColumn * 2),
                void(state.secondTabletColumn = state.secondTabletColumn * 2)
            )
        }
    }
})

export const {onLoadMoreClick} = likeSlice.actions

export default likeSlice.reducer