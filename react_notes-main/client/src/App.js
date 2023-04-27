import AppRouter from "./components/AppRouter";
import React, {useEffect, useState} from "react";
import './App.css'
import FileUpload from "./components/FileUpload";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";
import {observer} from "mobx-react-lite";

const App = observer(() => {
    // eslint-disable-next-line
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        check().then(user => {
            user.setUser(true)
            user.setIsAuth(true)
        }).finally(() => setLoading(false))
    }, [])

    if (loading) {
        return <Spinner animation={"grow"}/>
    }

    return (
        <FileUpload>
            <AppRouter/>
        </FileUpload>
    )
});

export default App;
