import React from "react";
import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import cls from './ThemeSwitcher.module.scss';
import LightIcon from 'shared/assets/icons/theme-light.svg'
import DarkIcon from 'shared/assets/icons/theme-dark.svg'
import {Theme} from "app/providers/ThemeProvider";

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = ({className}: ThemeSwitcherProps) => {

    const {theme, toggleTheme} = useTheme();

    return (
        <button className={classNames(cls.themeSwitcher, {}, [className])}
                onClick={toggleTheme}>
            {theme === Theme.LIGHT? <LightIcon /> : <DarkIcon />}
        </button>
    );
};

