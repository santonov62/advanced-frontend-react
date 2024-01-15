import React from 'react';
import { RoutePaths } from 'shared/config/routeConfig/routeConfig';

import MainIcon from 'shared/assets/icons/main.svg';
import AboutIcon from 'shared/assets/icons/about.svg';
import ProfileIcon from 'shared/assets/icons/profile.svg';

export interface SidebarItemType {
    path: string,
    text: string,
    Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemType[] = [
    {
        path: RoutePaths.main,
        text: 'Главная',
        Icon: MainIcon,
    },
    {
        path: RoutePaths.profile,
        text: 'Профиль',
        Icon: ProfileIcon,
    },
    {
        path: RoutePaths.about,
        text: 'О нас',
        Icon: AboutIcon,
    },
];
