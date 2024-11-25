import React, { useState } from "react";
import Box from '@mui/material/Box'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import styles from './index.module.scss'
import { Summarize, ListAlt, Login } from "@mui/icons-material";
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#4ba27d'
      }
    },
  });

export const TabsPanel = ({ authorize, form, table }) => {

    const [tabIndex, setTabIndex] = useState(null)
    const [content, setContent] = useState(null)

    const handleChange = (e, newTabIndex) => {
        setTabIndex(newTabIndex)
        switch(newTabIndex) {
            case 0:
                setContent(authorize);
                break;
            case 1:
                setContent(form);
                break;
            case 2:
                setContent(table);
                break;
            default:
                setContent(null)
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <Box>
            <Tabs value={tabIndex !== null ? tabIndex : false} onChange={handleChange}>
                <Tab icon=<Login/> className={ styles.customTab } label="Войти" indicatorcolor="primary"/>
                <Tab icon=<Summarize/> className={ tabIndex === null || tabIndex === 0 || tabIndex === 2 ? styles.customTabNot : styles.customTab } label="Форма для заявок" indicatorcolor="primary"/>
                <Tab icon=<ListAlt/> className={ styles.customTab } label="Сводная таблица" indicatorcolor="primary"/>
            </Tabs>
            <Box mt={2}>
                {content}
            </Box>
        </Box>
        </ThemeProvider>
        
    )
}