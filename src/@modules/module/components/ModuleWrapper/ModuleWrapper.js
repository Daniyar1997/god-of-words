import { Form, Outlet } from 'react-router-dom';


export default function ModuleWrapper(){
    return(
        <>
            <Form method="get" action="create" >
                <button type="submit">Создать</button>
            </Form>
            <Outlet />
        </>
    )
}