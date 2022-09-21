import {createSlice} from "@reduxjs/toolkit"

type State = [{
    image: string
    date: string
    country: string
    dash: string
    section: string
    header: string
    id: number
}]

const initialState: State = [{
    image: "",
    date: "",
    country: "",
    dash: "",
    section: "",
    header: "",
    id: 0
}]


export const likeSlice = createSlice({
    name:"likePage",
    initialState,
    reducers:{
        addToLikedPage: (state, action) => {
            state.unshift({
                image: action.payload.image,
                date: action.payload.date,
                country: action.payload.country,
                dash: action.payload.dash,
                section: action.payload.section,
                header: action.payload.header,
                id: action.payload.id,
            })
        },
        removeFromLikePage: (state, action) => {
            state.sort(function (a, b) {
                return a.id - b.id
            })
            state.splice(action.payload.id, 1)
        }
    }
})

export const {addToLikedPage, removeFromLikePage} = likeSlice.actions

export default likeSlice.reducer