import { classNames } from 'shared/lib/classNames/classNames';

import { Button } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input placeholder={t('Логин')} autofocus />
            <Input placeholder={t('Пароль')} />
            <Button className={cls.loginBtn}>{t('Войти')}</Button>
        </div>
    );
};
