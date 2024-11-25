import React from "react";
import styles from './index.module.scss';
import Tooltip from '@mui/material/Tooltip';
import { VpnKey } from "@mui/icons-material";
import styled from "@emotion/styled";

const StyledTooltip = styled(Tooltip)(({theme}) => ({
    backgroundColor: 'rgba(128, 128, 128, 0)',
    color: 'rgba(75, 162, 125, 1)'
}))

export const AccessTooltip = ({ access }) => {
    return (
        <StyledTooltip className={ styles.accessTooltip } title={access} placement="top" enterDelay={200} leaveDelay={200}>
            <VpnKey sx={{ color: "#4ba27d" }}></VpnKey>
        </StyledTooltip>
    )
}