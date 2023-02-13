import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Profile from '../../modules/root/components/Profile/Profile';
import ProfileInfo from '../../modules/root/components/ProfileInfo/ProfileInfo';
import Navigation from '../../modules/root/components/Navigation/Navigation';
import Module from '../../modules/module/components/Module/Module';
import Folder from '../Folder/Folder';
import Course from '../../modules/course/components/Course/Course';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  wrapperTop: {
    maxWidth: '800px',
    margin: 'auto',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#B3A3E8',
  },
  wrapperMid: {
    maxWidth: '800px',
    margin: 'auto',
    padding: '10px',
    backgroundColor: '#7EA5E8',
  }
})

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>Hello world!</div>,
  },
]);



function App() {
  const jss = useStyles();

  return (
    <>
      {/* <div className={jss.wrapperTop}>
        <Profile />
      </div>
      <div className={jss.wrapperMid}>
        <ProfileInfo />
        <Navigation />
        <Module />
        <Folder />
        <Course />
      </div> */}
        <RouterProvider router={router} />
    </>
  );
}

export default App;
