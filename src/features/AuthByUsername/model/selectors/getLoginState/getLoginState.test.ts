import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from 'features/AuthByUsername';
import { getLoginState } from './getLoginState';

describe('getLoginState.test', () => {
    test('should return login state', () => {
        const loginState: Pick<LoginSchema, 'username'> = { username: 'Alex' };
        const state: DeepPartial<StateSchema> = { loginFrom: loginState };
        expect(getLoginState(state as StateSchema)).toEqual(loginState);
    });
});
