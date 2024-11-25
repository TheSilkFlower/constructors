import React, { useState } from "react";
import styles from './index.module.scss';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { LogIn } from "../LogIn";

export const Verify = ({ constructor }) => {

    const [oleg, alex, max] = constructor
    const [client, setClient] = useState('')
    const [authorize, setAuthorize] = useState()

    function handleChange(e, value) {
        setClient(e.target.value)
        setAuthorize(value.props.children.props.name)
    }

    return (
            client ? (
                <LogIn name={authorize}/>
            ) : (
                <Box sx={{width: 220, height: 200, padding: 2}}>
            <FormControl fullWidth>
                <InputLabel id="client-select-label">Вход</InputLabel>
                <Select 
                    labelId="client-select-label"
                    value={client}
                    label="Client"
                    onChange={handleChange}>
                        <MenuItem value={oleg}>{oleg}</MenuItem>
                        <MenuItem value={alex}>{alex}</MenuItem>
                        <MenuItem value={max}>{max}</MenuItem>
                </Select>
            </FormControl>
        </Box>
            )
    )
}