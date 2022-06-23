import { useContext, useState } from 'react';
import { TodoContext } from '../../../App';


export const ButtonRemoveStat = () => {

    const myContext: any = useContext(TodoContext);

    const removeStatsBtn = () => {
        myContext.setCounterAdd(0);
        myContext.setCounterDelete(0);
        myContext.setCounterFinished(0);
        myContext.setCounterMiddleTime(<>0 days : 0 hours : 0 min : 0 sec</>);
        myContext.extraRender();
    }



    return (
        <div className="button_remove_stats" onClick={removeStatsBtn} >
            <p>R</p>
            <p>E</p>
            <p>M</p>
            <p>O</p>
            <p>V</p>
            <p>E</p>
        </div>
    )
}