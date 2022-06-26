import { FC, DragEvent } from "react";
import { DndProps } from "../../../interfaces/interfaces";
import { FinishedCard } from "./finishedCard/FinishedCard";

export const Finished: FC<DndProps> = ({ getDndItem, getDndTarget }) => {

    const dropFinish = (event: DragEvent) => {
        const element = event.target as HTMLDivElement;
        getDndTarget(element.id);
    }

    return (
        <div className='label_dnd_area'>
            <p className='label_todolist tasks_finished'>Done</p>
            <div className='dnd_area dnd_area_process' id="finished_area" onDragOver={(event) => event.preventDefault()} onDrop={dropFinish}>
                <FinishedCard getDndItem={getDndItem} />
            </div>
        </div>
    )
}