import '../../styles/todolist.scss';
import { Form } from '../form/Form';
import { TodoActions } from '../todoActions/TodoActions';

export const Todolist = () => {

    return (
        <div className='todolist_wrap'>
            <div className="todolist_top_area_wrap">
                <TodoActions />
            </div>

            <div className="todolist_bottom_wrap">
                <Form />
            </div>
        </div>
    )
}