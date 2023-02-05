import React from "react";
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppLink} from "shared/AppLink/AppLink";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink to={'/'}>Главная</AppLink>
            <AppLink to={'about'}>О сайте</AppLink>
        </div>
    );
};

