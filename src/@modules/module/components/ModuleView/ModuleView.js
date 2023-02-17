import React from 'react';
import { createUseStyles } from 'react-jss';
import modules from 'data/modules';

const useStyles = createUseStyles({
    wrapper: {
        padding: '10px',
        border: '1px solid green',
    }
})


export default function Module() {
    const jss = useStyles();

    return (
        <div className={jss.wrapper}>
            { modules.length && modules.map( item => {
                return (
                    <div key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            })}
        </div>
    )
}