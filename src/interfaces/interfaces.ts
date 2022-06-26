export interface DndProps {
    getDndItem: (itemId: string) => void,
    getDndTarget: (targ: string) => void,
}

export interface CardItemProps {
    getDndItem: (itemId: string) => void,
}

export interface ContextPropses {
    plannedTasks: any[],
    inProcessTasks: any[],
    finishedTasks: any[],
    addTask: (task: Object) => void,
    deleteTask: (itemId: string) => void,
    edit: (item: HTMLElement, editText: string, editId: string) => void,
    dndChangeList: (itemId: string, targetId: string) => void,
    counterAdd: number,
    counterDelete: number,
    counterFinished: number,
    counterMiddleTime: number,
    setCounterAdd: (fiber: any, queue?: any, action?: any) => any,
    setCounterDelete: (fiber: any, queue?: any, action?: any) => any,
    setCounterFinished: (fiber: any, queue?: any, action?: any) => any,
    setCounterMiddleTime: (fiber: any, queue?: any, action?: any) => any,
    extraRender: () => any,
}