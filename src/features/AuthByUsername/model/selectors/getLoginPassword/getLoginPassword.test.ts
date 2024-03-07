import { StateSchema } from 'app/providers/StoreProvider';
import { getLoginPassword } from './getLoginPassword';

describe('getLoginPassword.test', () => {
    test('should return password', () => {
        const state: DeepPartial<StateSchema> = { loginFrom: { password: '123' } };
        expect(getLoginPassword(state as StateSchema)).toEqual('123');
    });
});
