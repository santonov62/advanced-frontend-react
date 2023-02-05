import {Link} from "react-router-dom";
import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import cls from './Navbar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";

interface NavbarProps {
    className?: string
}

export const Navbar = ({className}: NavbarProps) => {

    const {toggleTheme} = useTheme();

    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <button onClick={toggleTheme}>Toggle</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'about'}>О сайте</Link>
        </div>
    );
};

