import { classNames } from 'shared/lib/classNames/classNames';
import { Link, LinkProps } from 'react-router-dom';
import { memo, ReactNode } from 'react';
import cls from './AppLink.module.scss';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
    IMPORTANT = 'important'
}

interface AppLinkProps extends LinkProps {
    className?: string,
    theme?: AppLinkTheme,
    children?: ReactNode
}

export const AppLink = memo((props: AppLinkProps) => {
    const {
        to, className, theme = AppLinkTheme.PRIMARY, children, ...otherProps
    } = props;

    return (
        <Link
            {...otherProps}
            to={to}
            className={classNames(cls.appLink, {}, [className, cls[theme]])}
        >
            {children}
        </Link>
    );
});
