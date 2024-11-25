import React from "react";
import styles from './index.module.scss'


export const Constructor = ({name, surname}) => {
    return (
        <div>{`${name} ${surname}`}</div>
    )
}