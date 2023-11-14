import React, {FC} from 'react';
import {Route, Routes} from "react-router-dom";
import {AboutPage, UsersPage} from "@/pages";
import {RouteNamesEnum} from "@/routes";

interface AppRouterProps {}

export const AppRouter: FC<AppRouterProps> = () => {
    return (
        <Routes>
            <Route path={RouteNamesEnum.HOME} element={<UsersPage/>}/>
            <Route path={RouteNamesEnum.ABOUT} element={<AboutPage/>}/>
        </Routes>
    );
};
