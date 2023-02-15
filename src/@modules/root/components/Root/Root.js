import React, { useEffect } from 'react';
import Profile from '@modules/common/components/Profile/Profile';
import ProfileInfo from '@modules/common/components/ProfileInfo/ProfileInfo';
import { Outlet, Link, useLoaderData, redirect } from 'react-router-dom';

export default function Root() {
  const data = useLoaderData();

  return (
    <>
      <Profile />
      <ProfileInfo />
      <h1>{data.param1}</h1>
      <h1>{data.param2}</h1>
      <nav>
        <ul>
          <li>
            <Link to={'module'}>Модули (Создать, Карточки, Заучивание, Текст, Подбор, Объединение, Экспорт, Публикация)</Link>
          </li>
          <li>
            <Link to={'folder'}>Папки</Link>
          </li>
          <li>
            <Link to={'course'}>Курс</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}