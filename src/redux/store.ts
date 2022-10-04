import { configureStore } from "@reduxjs/toolkit";
import burgerMenuReducer from "./burgerMenuReducer";
import likeReducer from "./likeReducer";
import loadMoreReducer from "./loadMoreReducer";


export const store = configureStore({
    reducer: {
        articlesLikeState: likeReducer,
        elementsCountState: loadMoreReducer,
        isOpenState: burgerMenuReducer,
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
