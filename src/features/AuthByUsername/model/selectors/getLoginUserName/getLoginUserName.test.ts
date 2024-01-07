import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginUserName } from './getLoginUserName';

describe('getLoginUserName.test', () => {
    test('should return username', () => {
        const state: DeepPartial<StateSchema> = { loginFrom: { username: 'Alex' } };
        expect(getLoginUserName(state as StateSchema)).toEqual('Alex');
    });
});
