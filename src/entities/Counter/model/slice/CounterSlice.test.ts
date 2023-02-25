import { CounterSchema } from '../types/CounterSchema';
import { CounterActions, counterReducer } from '../slice/CounterSlice';

describe('CounterSlice.test', () => {
    test('increment', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, CounterActions.increment()))
            .toEqual({ value: 11 });
    });
    test('decrement', () => {
        const state: CounterSchema = {
            value: 10,
        };
        expect(counterReducer(state, CounterActions.decrement()))
            .toEqual({ value: 9 });
    });
    test('should work with empty state', () => {
        expect(counterReducer(undefined, CounterActions.increment()))
            .toEqual({ value: 1 });
    });
});
