import AppRouter from "./components/AppRouter";
import React from "react";
import {observer} from "mobx-react-lite";
import NavBar from "./components/NavBar";
import {BrowserRouter} from "react-router-dom";

const App = observer(() => {
    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter/>
        </BrowserRouter>
    )
});

export default App;
