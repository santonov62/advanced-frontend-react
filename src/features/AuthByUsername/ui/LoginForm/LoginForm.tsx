import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import { Text, TextTheme } from 'shared/ui/Text/Text';
import { useSelector } from 'react-redux';
import { memo, useCallback } from 'react';
import { DynamicModuleLoader, ReducersList } from 'shared/components/DynamicModuleLoader/DynamicModuleLoader';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginUserName } from '../../model/selectors/getLoginUserName/getLoginUserName';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string,
    onSuccess?: () => void
}

const LoginForm = memo(({ className, onSuccess }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useAppDispatch();
    const userName = useSelector(getLoginUserName);
    const password = useSelector(getLoginPassword);
    const isLoading = useSelector(getLoginIsLoading);
    const error = useSelector(getLoginError);
    // const store = useStore() as ReduxStoreWithManager;

    // useEffect(() => {
    //     store.reducerManager.add('loginFrom', loginReducer);
    //     dispatch({ type: '@INIT login form reducer' });
    //     return () => {
    //         dispatch({ type: '@DESTROY login form reducer' });
    //         store.reducerManager.remove('loginFrom');
    //     };
    //     // eslint-disable-next-line
    // }, []);

    const onUsernameChange = useCallback((value: string) => {
        dispatch(loginActions.setUsername(value));
    }, [dispatch]);

    const onPasswordChange = useCallback((value: string) => {
        dispatch(loginActions.setPassword(value));
    }, [dispatch]);

    const onLoginClick = useCallback(async () => {
        const result = await dispatch(loginByUsername({ username: userName, password }));
        const isSuccess = result.meta.requestStatus === 'fulfilled';
        if (isSuccess) {
            onSuccess.call(this);
        }
    }, [dispatch, password, userName, onSuccess]);

    const initialReducers: ReducersList = {
        loginFrom: loginReducer,
    };

    return (
        <DynamicModuleLoader reducers={initialReducers}>
            <div className={classNames(cls.loginForm, {}, [className])}>
                <Text title={t('Authorization form')} />
                {!!error && <Text text={t('Вы ввели неправильные данные')} theme={TextTheme.ERROR} />}
                <Input
                    placeholder={t('Login')}
                    autofocus
                    onChange={onUsernameChange}
                    value={userName}
                />
                <Input
                    placeholder={t('Password')}
                    onChange={onPasswordChange}
                    value={password}
                />
                <Button
                    theme={ButtonTheme.OUTLINE}
                    className={cls.loginBtn}
                    onClick={onLoginClick}
                    disabled={isLoading}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});

export default LoginForm;
