import cls from './AppLink.module.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {Link, LinkProps} from "react-router-dom";
import {FC} from "react";

interface AppLinkProps extends LinkProps {
    className?: string
}

export const AppLink: FC<AppLinkProps> = (props) => {
    const {to, className, children, ...otherProps} = props;

    return (
        <Link {...otherProps} to={to} className={classNames(cls.appLink, {}, [className])}>
            {children}
        </Link>
    );
};

