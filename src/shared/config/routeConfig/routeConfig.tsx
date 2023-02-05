import {RouteProps} from "react-router-dom";
import {MainPage} from "pages/MainPage";
import React from "react";
import {AboutPage} from "pages/AboutPage";

export enum AppRoutes {
    MAIN = 'main',
    ABOUT = 'about'
}

export const RoutePaths: Record<AppRoutes, string> = {
    [AppRoutes.ABOUT]: '/about',
    [AppRoutes.MAIN]: '/',
}

export const routeConfig: RouteProps[] = [
    {path: RoutePaths.main, element: <MainPage/>},
    {path: RoutePaths.about, element: <AboutPage/>}
]