import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { User } from '../../types/apiDomain';
import { RootState } from '../store';

export const saveUser = createAsyncThunk('user/saveUser', async (user: User | {}) => {
    return await fetch(`${process.env.REACT_APP_API_HOST}/user/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(user)
    }).then((res) => res.json()) as Promise<User>
})

interface UserSliceState {
    user: User
}

const userSlice = createSlice({
    name: 'user',
    initialState: {} as UserSliceState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(saveUser.fulfilled, (state, action) => {
                state.user = action.payload
            })
    }
});

export const selectSavingUser = (state: RootState) => state.users.user

export const userReducer = userSlice.reducer;