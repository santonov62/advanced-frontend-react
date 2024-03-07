import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOACALSTORAGE_KEY } from 'shared/const/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

export const loginByUsername = createAsyncThunk<
    User,
    LoginByUsernameProps,
    ThunkConfig<string>
>(
    'login/loginByUsername',
    async ({ username, password }, thunkApi) => {
        const { dispatch, extra, rejectWithValue } = thunkApi;
        try {
            const response = await extra.api.post<User>('/login', {
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
            return rejectWithValue(e instanceof Error ? e.message : 'Error');
        }
    },
);
