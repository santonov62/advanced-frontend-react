import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button/Button';
import cls from './PageError.module.scss';

interface ErrorPageProps {
    className?: string
}

export const PageError = ({ className }: ErrorPageProps) => {
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
