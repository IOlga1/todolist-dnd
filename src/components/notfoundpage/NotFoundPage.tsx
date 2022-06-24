import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import '../../styles/notFoundPage.scss';


export const NotFoundPage = () => {
    const [counter, setCounter] = useState(15);

    useEffect(() => {
        let intervalDeal = setInterval(() => {
            setCounter(counter - 1);
        }, 1000);
        return () => clearInterval(intervalDeal)
    }, [counter])

    if (counter < 0) {
        return <Navigate to="/" />
    }

    return (
        <div className='notFoundPage_404_wrap'>
            <div className='timer_home_redirect'>
                <p>Вы будете перенаправлены на <Link to='/'>главную</Link> страницу через {counter} секунд</p>
            </div>
        </div>
    )
}