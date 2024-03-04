import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOACALSTORAGE_KEY } from 'shared/const/localstorage';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, {rejectValue: string}>(
    'login/loginByUsername',
    async ({ username, password }, { dispatch, extra, rejectWithValue }) => {
        try {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            const response = await extra.api.post<User>('http://localhost:8000/login', {
                username, password,
            });
            const { data } = response;
            if (!data) {
                throw new Error('Error');
            }

            localStorage.setItem(USER_LOACALSTORAGE_KEY, JSON.stringify(data));
            dispatch(userActions.setAuthData(data));

            return data;
        } catch (e) {
            return rejectWithValue(e.message);
        }
    },
);
