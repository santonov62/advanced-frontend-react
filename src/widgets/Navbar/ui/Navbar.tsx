import React from "react";
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";
import { ThemeSwitcher } from "widgets/ThemeSwitcher";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <ThemeSwitcher />
            <div style={{flexGrow: 1}}></div>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>Главная</AppLink>
            <AppLink theme={AppLinkTheme.IMPORTANT} to={'about'}>О сайте</AppLink>
        </div>
    );
};

