import { StateSchema } from 'app/providers/StoreProvider';
import { DeepPartial } from '@reduxjs/toolkit';
import { getLoginIsLoading } from './getLoginIsLoading';

describe('getLoginIsLoading.test', () => {
    test('should return true', () => {
        const state: DeepPartial<StateSchema> = { loginFrom: { isLoading: true } };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(true);
    });

    test('should return false', () => {
        const state: DeepPartial<StateSchema> = { loginFrom: { isLoading: false } };
        expect(getLoginIsLoading(state as StateSchema)).toEqual(false);
    });
});
