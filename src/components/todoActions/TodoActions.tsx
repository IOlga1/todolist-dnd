import '../../styles/todoActions.scss';
import { useState, useContext } from 'react';
import { Planned } from './planned/Planned';
import { InProcess } from './inProcess/InProcess';
import { Finished } from './finished/Finished';
import { TodoContext } from '../../App';
import { ContextPropses } from '../../interfaces/interfaces';


export const TodoActions = () => {
    const [onDragStartItem, setOnDragStartItem] = useState('');

    const myContext: ContextPropses = useContext(TodoContext);

    const getDndItem = (itemId: string) => {
        setOnDragStartItem(`${itemId}`);
    }

    const getDndTarget = (targ: string) => {
        myContext.dndChangeList(onDragStartItem, targ);
    }

    return (
        <>
            <div className='dnd_area_wrap'>
                <Planned getDndItem={getDndItem} getDndTarget={getDndTarget} />
                <InProcess getDndItem={getDndItem} getDndTarget={getDndTarget} />
                <Finished getDndItem={getDndItem} getDndTarget={getDndTarget} />
            </div>
        </>
    )
}