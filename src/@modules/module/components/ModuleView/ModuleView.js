import React from 'react';
import { createUseStyles } from 'react-jss';
import { Form, Outlet, redirect } from 'react-router-dom';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#459FE8'
    }
})


export default function Module() {
    const jss = useStyles();

    return (
        <>
            <Form method="get" action="create" >
                <button type="submit">Создать</button>
            </Form>
            <Outlet />
        </>

    )
}