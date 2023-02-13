import React from 'react';
import ReactDOM from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import './index.css';

import Root from '@modules/root/components/Root/Root';

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
    },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={router} />
);