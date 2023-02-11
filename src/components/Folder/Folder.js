import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#74DAE8'
    }
})


export default function Folder() {
    const jss = useStyles();

    return (
        <div className={jss.wrapper}>
           Папки: <br />
           Хранение модулей
        </div>
    )
}