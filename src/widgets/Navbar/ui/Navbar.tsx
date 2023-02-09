import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { useTranslation } from 'react-i18next';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <div style={{ flexGrow: 1 }} />
            <AppLink theme={AppLinkTheme.SECONDARY} to="/">{t('mainPage')}</AppLink>
            <AppLink theme={AppLinkTheme.IMPORTANT} to="about">{t('about')}</AppLink>
        </div>
    );
};
