import '../../../../styles/card.scss';
import { useContext, useState, FC, DragEvent, FocusEvent, MouseEvent } from 'react';
import { TodoContext } from '../../../../App';
import { ContextPropses, CardItemProps } from '../../../../interfaces/interfaces'


export const FinishedCard: FC<CardItemProps> = ({ getDndItem }) => {
    const [editable, setEditable] = useState(false);
    const [hidden, setHidden] = useState(true);

    const myContext: ContextPropses = useContext(TodoContext);

    const allowDrop = (event: DragEvent<HTMLDivElement>) => {
        const element = event.target as HTMLDivElement;
        const id = element.id;
        getDndItem(element.id);
    }

    const edit = () => {
        setEditable(true);
        setHidden(false);
    }

    const blur = (event: FocusEvent<HTMLInputElement>) => {
        myContext.edit(event.target, event.target.innerText, event.target.id)
        setEditable(false);
        setHidden(true);
    }


    const deleteTask = (event: MouseEvent<HTMLDivElement>) => {
        const element = event.target as HTMLInputElement;
        const id = element.id;
        myContext.deleteTask(id);
    }

    return (
        <>
            {myContext.finishedTasks.map((task: any, index: any) => (
                <div className="task_wrap" key={task.get('idItem')} id={task.get('idItem')} draggable onDragStart={allowDrop}>
                    <div className="task_text">
                        <p className='title_text' id={task.get('idItem')} contentEditable={editable} onBlur={blur} suppressContentEditableWarning={true}>{task.get('titleText')}</p>
                        <p className='description_text' id={task.get('idItem')} contentEditable={editable} onBlur={blur} suppressContentEditableWarning={true}>{task.get('descriptionText')}</p>
                    </div>

                    <div className="check">
                        <div className="hidden_button" hidden={hidden} id={index} ></div>
                        <div className="redo_button" data-attr='atr' id={task.get('idItem')} onClick={edit} ></div>
                        <div className="delete_button" id={task.get('idItem')} key={task.get('idItem')} onClick={deleteTask} ></div>
                    </div>
                </div>
            ))}
        </>
    )
}