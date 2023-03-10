import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom';
import './index.css';

import Root from '@modules/root/components/Root/Root';
import Index from '@modules/root/components/Index/Index';
import ErrorPage from '@modules/error/components/ErrorPage/ErrorPage';

import ModuleWrapper from '@modules/module/components/ModuleWrapper/ModuleWrapper';
import ModuleView from '@modules/module/components/ModuleView/ModuleView';
import ModuleCreate from './@modules/module/components/ModuleCreate/ModuleCreate';

import Folder from '@modules/folder/components/Folder/Folder';
import Course from '@modules/course/components/Course/Course';

import createModule from './@modules/module/module';


const router = createBrowserRouter([
    {
        element: <Root />,
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                element: <ModuleWrapper />,
                path: 'module',
                children: [
                    {
                        element: <ModuleView />,
                        path: 'view',
                    },
                    {
                        element: <ModuleCreate />,
                        path: 'create'
                    },
                ]
            },

            {
                element: <Folder />,
                path: 'folder',
            },
            {
                element: <Course />,
                path: 'course',
            }
        ]
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);