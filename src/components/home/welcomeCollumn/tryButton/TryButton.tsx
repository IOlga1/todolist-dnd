import '../../../../styles/tryButton.scss';
import { Link } from 'react-router-dom';


export const TryButton = () => {

    return (
        <div className='button_try_wrap' >
            <Link to='/todolist'>
                <div className='button_try'>TRY NOW</div>
            </Link>
        </div>
    )
}