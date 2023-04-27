import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {NavLink, Outlet, useNavigate} from "react-router-dom";
import {BASKET_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {Button, Container, Nav, Navbar} from "react-bootstrap";

const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()
    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
        //navigate('/' + LOGIN_ROUTE)
    }

    const openBasket = () => {
        navigate('/' + BASKET_ROUTE)
    }

        return (
            <>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <NavLink style={{color: 'white'}} to={'/' + SHOP_ROUTE}>PayRoblox.com</NavLink>
                        <Nav
                            className="ml-auto my-2"
                            style={{maxHeight: '100px', color: 'white'}}
                            navbarScroll
                        >
                            {user.isAuth ?
                                <Nav className="ml-auto" style={{color: 'white'}}>
                                    <Button className="ms-3" onClick={openBasket}> Корзина </Button>
                                    <Button className="ms-3" onClick={logOut}>Выйти</Button>
                                </Nav>
                                :
                                <Nav className="ml-auto" style={{color: 'white'}}>
                                    <Button variant={"outline-light"} onClick={() => navigate(LOGIN_ROUTE)}>Авторизация</Button>
                                </Nav>
                            }
                        </Nav>
                    </Container>
                </Navbar>
                <Outlet/>
            </>
        );
});

export default NavBar;