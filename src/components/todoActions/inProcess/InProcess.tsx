import { FC, DragEvent } from "react";
import { DndProps } from "../../../interfaces/interfaces";
import { InProcessCard } from "./inProcessCard/InProcessCard";

export const InProcess: FC<DndProps> = ({ getDndItem, getDndTarget }) => {

    const dropFinish = (event: DragEvent) => {
        const element = event.target as HTMLDivElement;
        getDndTarget(element.id);
    }

    return (
        <div className='label_dnd_area'>
            <p className='label_todolist tasks_process'>Doing</p>
            <div className='dnd_area dnd_area_process' id="process_area" onDragOver={(event) => event.preventDefault()} onDrop={dropFinish}>
                <InProcessCard getDndItem={getDndItem} />
            </div>
        </div>
    )
}