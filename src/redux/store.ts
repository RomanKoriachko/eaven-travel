import { configureStore } from "@reduxjs/toolkit";
import likePageReducer from "./likePageReducer";
import likeReducer from "./likeReducer";


export const store = configureStore({
    reducer: {
        articlesLikeState: likeReducer,
        articlesArr: likePageReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
