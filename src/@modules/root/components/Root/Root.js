import React from 'react';
import Profile from '@modules/common/components/Profile/Profile';
import ProfileInfo from '@modules/common/components/ProfileInfo/ProfileInfo'
// import { createUseStyles } from 'react-jss';

// const useStyles = createUseStyles({
//   wrapperTop: {
//     maxWidth: '800px',
//     margin: 'auto',
//     display: 'flex',
//     justifyContent: 'flex-end',
//     alignItems: 'center',
//     padding: '10px',
//     backgroundColor: '#B3A3E8',
//   },
//   wrapperMid: {
//     maxWidth: '800px',
//     margin: 'auto',
//     padding: '10px',
//     backgroundColor: '#7EA5E8',
//   }
// })

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <div>Hello world!</div>,
//   },
// ]);



export default function Root() {
  // const jss = useStyles();

  return (
    <>
      <Profile />
      <ProfileInfo />
      <button>Модули</button>
      <button>Папки</button>
      <button>Курсы</button>
    </>
  );
}