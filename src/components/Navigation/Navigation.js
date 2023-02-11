import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {

    },
    list: {
        listStyleType: 'none',
        padding: '5px',
        display: 'flex',
    },
    item: {
        padding: '5px',
        marginRight: '20px',
        borderBottom: '2px solid gray',
        fontWeight: 'bold',
        '&:hover': {
            cursor: 'pointer',
            borderBottom: '2px solid blue',
        }
    }
})

export default function Navigation() {
    const jss = useStyles();

    return(
        <div className={jss.wrapper}>
            <ul className={jss.list}>
                <li className={jss.item}>Учебные модули</li>
                <li className={jss.item}>Папки</li>
                <li className={jss.item}>Курсы</li>
            </ul>
        </div>
    )
}