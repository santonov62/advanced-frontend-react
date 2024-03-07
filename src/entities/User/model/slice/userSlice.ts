import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { USER_LOACALSTORAGE_KEY } from 'shared/const/localstorage';
import { User, UserSchema } from '../types/User';

const initialState: UserSchema = {
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        initAuthData: (state) => {
            state.authData = JSON.parse(localStorage.getItem(USER_LOACALSTORAGE_KEY) || '');
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOACALSTORAGE_KEY);
        },
    },
});

export const { actions: userActions } = userSlice;
export const { reducer: userReducer } = userSlice;
