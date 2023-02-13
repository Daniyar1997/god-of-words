import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#3A57E8'
    }
})


export default function Folder() {
    const jss = useStyles();

    return (
        <div className={jss.wrapper}>
           Курсы: <br />
           Хранение курсов
        </div>
    )
}