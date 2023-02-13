import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import { Suspense } from 'react';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();
    const reloadPage = () => {
        window.location.reload();
    };
    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            <p>{t('Something wrong')}</p>
            <Button onClick={reloadPage}>{t('Reload Page')}</Button>
        </div>
    );
};
