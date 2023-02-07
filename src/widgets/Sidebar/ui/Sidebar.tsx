import cls from './Sidebar.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import React, {useState} from 'react';
import {ThemeSwitcher} from "widgets/ThemeSwitcher";
import {LanguageSwitcher} from "widgets/LanguageSwitcher";
import {useTranslation} from "react-i18next";

interface SidebarProps {
    className?: string
}

export const Sidebar = ({className}: SidebarProps) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed( prev => !prev);
    }

    const {t} = useTranslation();

    return (
        <div className={classNames(cls.sidebar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}>{t('toggle')}</button>
            <div className={classNames(cls.switchers)}>
                <ThemeSwitcher />
                <LanguageSwitcher />
            </div>
        </div>
    );
};

