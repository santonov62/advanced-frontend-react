import { Button } from 'shared/ui/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue';
import { CounterActions } from '../model/slice/CounterSlice';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounterValue);
    const increment = () => {
        dispatch(CounterActions.increment());
    };
    const decrement = () => {
        dispatch(CounterActions.decrement());
    };
    const { t } = useTranslation();
    return (
        <div>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>{t('Increment')}</Button>
            <Button onClick={decrement}>{t('Decrement')}</Button>
        </div>
    );
};
