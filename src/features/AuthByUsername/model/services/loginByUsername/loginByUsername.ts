import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from 'entities/User';
import { USER_LOACALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async ({ username, password }, thunkAPI) => {
        try {
            const response = await axios.post<User>('http://localhost:8000/login', {
                username, password,
            });
            const { data } = response;
            if (!data) {
                throw new Error('Пользователь не найден');
            }

            localStorage.setItem(USER_LOACALSTORAGE_KEY, JSON.stringify(data));
            thunkAPI.dispatch(userActions.setAuthData(data));

            return data;
        } catch (e) {
            window.console.log(e);
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
