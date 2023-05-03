import React from 'react';
import {Route, Routes} from 'react-router-dom'
import {authRoutes, publicRoutes} from "../routes";
import Shop from "../page/Shop";
import Auth from "../page/Auth";


const AppRouter = () => {
    return (
        <Routes>
            <Route>
                <Route index element={<Shop/>}/>
                {authRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                {publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={Component}/>
                )}
                <Route path="*" element={<Auth/>}/>
            </Route>
        </Routes>
    );
};

export default AppRouter;