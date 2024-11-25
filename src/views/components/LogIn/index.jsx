import React, { useMemo, useEffect, useState } from "react";
import styles from './index.module.scss';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container } from '@mui/material';

export const LogIn = ({ name }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    const [concurrency, setConcurrency] = useState(false)

    useEffect(() => {
        setLogParams()
    }, [name])

    function setLogParams() {
        if(name === "Олег") {
            setUserEmail("belov@ex.com")
            setUserPass("passOleg")
        } else if(name === "Алексей") {
            setUserEmail("serov@ex.com")
            setUserPass("passAlex")
        } else {
            setUserEmail("chernov@ex.com")
            setUserPass("passMax")
        }
    }

    function compareValues() {
        if(userEmail === email && userPass === password) {
            setConcurrency(true)
        }
    }

    function handleSubmit(e) {
        e.preventDefault()
        compareValues()
    }

    return (
            concurrency ? (
            `Добро пожаловать, ${name}!`
            ) : (
            <Container maxWidth="sm">
                    <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    margin="normal"
                    label="Email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <TextField
                    fullWidth
                    margin="normal"
                    label="Password"
                    type="password"
                    variant="outlined"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >Авторизоваться</Button>
                    </form>
            </Container>
            )
    )
}