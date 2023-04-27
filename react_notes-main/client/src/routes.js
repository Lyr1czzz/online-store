import {BASKET_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "./utils/consts";
import Shop from "./page/Shop";
import Auth from "./page/Auth";
import Basket from "./page/Basket";

export const authRoutes = [
    {
        path: BASKET_ROUTE,
        Component: <Basket/>
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