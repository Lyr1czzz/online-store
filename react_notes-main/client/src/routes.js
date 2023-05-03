import {BASKET_ROUTE, INVENTORY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import Basket from "./page/Basket";
import React from "react";
import Inventory from "./page/Inventory";

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
    },
    {
        path: INVENTORY_ROUTE,
        Component: <Inventory/>
    },
]

export const publicRoutes = [
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: SHOP_ROUTE,
        Component: <Shop/>
    },
]