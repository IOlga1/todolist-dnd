import { FC, DragEvent } from "react";
import { DndProps } from "../../../interfaces/interfaces";
import { PlannedItemCard } from "./plannedCard/PlannedCard"

export const Planned: FC<DndProps> = ({ getDndItem, getDndTarget }) => {

    const dropFinish = (event: DragEvent) => {
        const element = event.target as HTMLDivElement;
        getDndTarget(element.id);
    }

    return (
        <div className='label_dnd_area'>
            <p className='label_todolist tasks_planned'>Planned</p>
            <div className='dnd_area dnd_area_planned' id="planned_area" onDragOver={(event) => event.preventDefault()} onDrop={dropFinish} >
                <PlannedItemCard getDndItem={getDndItem} />
            </div>
        </div>
    )
}