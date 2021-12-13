import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userSlice";
import { loadState, saveState } from "../utils/localStorage";
import throttle from 'lodash.throttle'

const reducer = {
    users: userReducer
}

export const store = configureStore({
    reducer,
    preloadedState: loadState()
})

store.subscribe(
    throttle( () => saveState(store.getState()), 1000)
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch