import { RouteProps } from 'react-router-dom';
import { MainPage } from 'pages/MainPage';
import React from 'react';
import { AboutPage } from 'pages/AboutPage';
import { NotFoundPage } from 'pages/NotFoundPage/ui/NotFoundPage';

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about',
    NOT_FOUND = 'not_found'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
    [AppRoutes.NOT_FOUND]: '/*',
};

export const routeConfig: RouteProps[] = [
    { path: RoutePaths.main, element: <MainPage /> },
    { path: RoutePaths.about, element: <AboutPage /> },
    { path: RoutePaths.not_found, element: <NotFoundPage /> },
];
