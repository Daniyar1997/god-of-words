import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        backgroundColor: '#459FE8'
    }
})


export default function Module() {
    const jss = useStyles();

    return (
        <div className={jss.wrapper}>
            Модуль: <br/>
            Создание  <br/>
            Карточки  <br/>
            Заучивание  <br/>
            Тест  <br/>
            Подбор  <br/>
            Объединение  <br/>
            Экспорт  <br/>
            Публикация  <br/>
        </div>
    )
}