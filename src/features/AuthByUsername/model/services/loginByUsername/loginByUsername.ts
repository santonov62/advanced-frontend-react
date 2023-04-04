import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'entities/User';

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
            if (!response.data) {
                throw new Error();
            }
            return response.data;
        } catch (e) {
            window.console.log(e);
            return thunkAPI.rejectWithValue(e.message);
        }
    },
);
