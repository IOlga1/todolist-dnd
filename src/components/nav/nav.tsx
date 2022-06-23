import '../../styles/nav.scss';
import { Link } from 'react-router-dom';
import { useState } from 'react';


export const Nav = () => {
    const [visibilityClass, setVisibilityClass] = useState('nav_text nav_text_hidden')
    const [toggleClass, setToggleClass] = useState('nav_icon nav_toggle_dots');
    const [toggleStatus, setToggleStatus] = useState('off');

    const changeVisibilityNav = () => {
        if (toggleStatus === 'off') {
            setVisibilityClass('nav_text nav_text_visible');
            setToggleClass('nav_icon nav_toggle_arrow')
            setToggleStatus('on');
        } else {
            setVisibilityClass('nav_text_hidden');
            setToggleClass('nav_icon nav_toggle_dots')
            setToggleStatus('off');
        }
    }

    return (
        <nav className='nav_sidebar_wrap'>

            <div className='nav_toggle_wrap' onClick={changeVisibilityNav}>
                <div className={toggleClass}></div>
            </div>

            <div className='nav_items_wrap'>
                <Link to='/'>
                    <div className='nav_item'>
                        <div className='nav_icon nav_icon_home'></div>
                        <div className={visibilityClass}>Home</div>
                    </div>
                </Link>

                <Link to='/todolist'>
                    <div className='nav_item'>
                        <div className='nav_icon nav_icon_todolist'></div>
                        <div className={visibilityClass}>Todolist</div>
                    </div>
                </Link>

                <Link to='/statistic'>
                    <div className='nav_item'>
                        <div className='nav_icon nav_icon_statistic'></div>
                        <div className={visibilityClass}>Statistic</div>
                    </div>
                </Link>
            </div>
        </nav >
    )
}