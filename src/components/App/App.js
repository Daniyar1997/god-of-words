import React from 'react';
import Profile from '../Profile/Profile';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import Navigation from '../Navigation/Navigation';
import Module from '../Module/Module';
import Folder from '../Folder/Folder';
import Course from '../Course/Course';
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

function App() {
  const jss = useStyles();

  return (
    <>
      <div className={jss.wrapperTop}>
        <Profile />
      </div>
      <div className={jss.wrapperMid}>
        <ProfileInfo />
        <Navigation />
        <Module />
        <Folder />
        <Course />
      </div>
    </>
  );
}

export default App;
