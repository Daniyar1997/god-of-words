import React from 'react';
import Profile from '@modules/common/components/Profile/Profile';
import ProfileInfo from '@modules/common/components/ProfileInfo/ProfileInfo';
import { Outlet, Link } from 'react-router-dom';

export default function Root() {

  return (
    <>
      <Profile />
      <ProfileInfo />
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