import { Form } from 'react-router-dom';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
    wrapper: {
        padding: '10px',
        border: '1px solid green',
    }
})

export default function ModuleCreate() {
    const jss = useStyles();

    return (
        <>
            <Form className={jss.wrapper}>
                <div>
                    <label>
                        НАЗВАНИЕ
                        <input
                            type='text'
                            placeholder='Введите название'
                            />
                    </label>
                    <label>
                        ОПИСАНИЕ
                        <input
                            type='text'
                            placeholder='Введите описание'
                            />
                    </label>
                </div>
                <div>
                    <label>
                        ТЕРМИН
                        <input
                            type='text'
                            placeholder='Введите термин'
                            />
                    </label>
                    <label>
                        ОПРЕДЕЛЕНИЕ
                        <input
                            type='text'
                            placeholder='Введите определение'
                            />
                    </label>
                    <label>
                        ИЗОБРАЖЕНИЕ
                        <input
                            type='file'
                            placeholder='Введите изображение'
                            />
                    </label>
                </div>
            </Form>
        </>
    );
}