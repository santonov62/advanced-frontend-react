import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(cls.navbar, {}, [className])}>
        <div style={{ flexGrow: 1 }} />
        <AppLink theme={AppLinkTheme.SECONDARY} to="/">Главная</AppLink>
        <AppLink theme={AppLinkTheme.IMPORTANT} to="about">О сайте</AppLink>
    </div>
);
