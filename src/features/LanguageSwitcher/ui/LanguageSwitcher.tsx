import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ButtonTheme } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';

interface LanguageSwitcherProps {
    className?: string,
    collapsed?: boolean,
}

export const LanguageSwitcher = ({ className, collapsed }: LanguageSwitcherProps) => {
    const { t, i18n } = useTranslation();

    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            className={classNames('', {}, [className])}
            theme={ButtonTheme.CLEAR}
            onClick={toggle}
        >
            {t(collapsed ? 'Язык сокращение' : 'Язык')}
        </Button>
    );
};
