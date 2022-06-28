import './App.scss';
import { Routes, Route } from 'react-router-dom';
import React, { useEffect, useState, } from 'react';
import { Nav } from './components/nav/nav'
import { Home } from './components/home/Home';
import { Todolist } from './components/todolist/Todolist';
import { Statistic } from './components/statistic/Statistic';
import { NotFoundPage } from './components/notfoundpage/NotFoundPage';


export const TodoContext = React.createContext({
  plannedTasks: [],
  inProcessTasks: [],
  finishedTasks: [],
  addTask: (task: Object) => { },
  deleteTask: (itemId: string) => { },
  edit: (item: HTMLElement, editText: string, editId: string) => { },
  dndChangeList: (itemId: string, targetId: string) => { },
  counterAdd: 0,
  counterDelete: 0,
  counterFinished: 0,
  counterMiddleTime: 0,
  setCounterAdd: (value: number) => { },
  setCounterDelete: (fiber: number) => { },
  setCounterFinished: (fiber: number) => { },
  setCounterMiddleTime: (fiber: JSX.Element) => { },
  extraRender: () => {},
});

function App() {
  const [plannedTasks, setPlannedTasks]: any[] = useState([]);
  const [inProcessTasks, setInProcessTasks]: any[] = useState([]);
  const [finishedTasks, setFinishedTasks]: any[] = useState([]);
  const [updateState, setUpdateState] = useState('');
  const [counterAdd, setCounterAdd] = useState(0);
  const [counterDelete, setCounterDelete] = useState(0);
  const [counterFinished, setCounterFinished] = useState(0);
  const [counterMiddleTime, setCounterMiddleTime]: any = useState(0);
  let millisec = 0;
  const tasks = [plannedTasks, inProcessTasks, finishedTasks];



  useEffect(() => {
    const plannedOutLS = JSON.parse(localStorage.getItem('planned')!);
    const inProcessOutLS = JSON.parse(localStorage.getItem('inProcess')!);
    const finishedOutLS = JSON.parse(localStorage.getItem('finished')!);
    const LStasks = [plannedOutLS, inProcessOutLS, finishedOutLS];
    const counterAddLS = JSON.parse(localStorage.getItem('counterAdd')!);
    const counterDeleteLS = JSON.parse(localStorage.getItem('counterDelete')!);
    const counterFinishedLS = JSON.parse(localStorage.getItem('counterFinished')!);

    if (LStasks[0]) {
      for (let arr = 0; arr < tasks.length; arr++) {
        const newArr = [];

        for (let objects of LStasks[arr]) {
          newArr.push(new Map(Object.entries(objects)));
        }

        switch (arr) {
          case 0:
            setPlannedTasks(newArr);
            break;
          case 1:
            setInProcessTasks(newArr);
            break;
          case 2:
            setFinishedTasks(newArr);
            break;
          default:
            break;
        }
      }

      setCounterAdd(counterAddLS);
      setCounterFinished(counterFinishedLS);
      setCounterDelete(counterDeleteLS);
    }

  }, [])


  useEffect(() => {
    for (let arr = 0; arr < tasks.length; arr++) {
      const arrForLS = [];
      for (let maps of tasks[arr]) {
        arrForLS.push(Object.fromEntries(maps))
      }
      if (arr === 0) {
        localStorage.setItem('planned', JSON.stringify(arrForLS));
      } else if (arr === 1) {
        localStorage.setItem('inProcess', JSON.stringify(arrForLS));
      } else if (arr === 2) {
        localStorage.setItem('finished', JSON.stringify(arrForLS));
      }
    }

    calcMiddleFinishTime();

    localStorage.setItem("counterAdd", JSON.stringify(counterAdd));
    localStorage.setItem("counterDelete", JSON.stringify(counterDelete));
    localStorage.setItem("counterFinished", JSON.stringify(counterFinished));

    if (counterFinished < 0){
      setCounterFinished(0);
    } 

  }, [plannedTasks, inProcessTasks, finishedTasks, updateState])



  const addTask = (task: Object) => {
    setPlannedTasks([...plannedTasks, task]);
    setCounterAdd(counterAdd + 1);
  }

  const deleteTask = (itemId: string) => {
    setCounterDelete(counterDelete + 1);
    tasks.forEach(areas => {
      for (let task of areas.values()) {
        if (task.get('idItem') === itemId) {
          checkAreaElemWillBeDeleted(task);
        }
      }
    })
  }

  const checkAreaElemWillBeDeleted = (task: any) => {
    if (task.get('area') === 'planned_area') {
      deleteOne(task, setPlannedTasks, plannedTasks);
    } else if (task.get('area') === 'process_area') {
      deleteOne(task, setInProcessTasks, inProcessTasks);
    } else if (task.get('area') === 'finished_area') {
      deleteOne(task, setFinishedTasks, finishedTasks);
      setCounterFinished(counterFinished - 1);
    }
  }

  const deleteOne = (task: string, setActualList: any, area: []) => {
    setActualList(area.filter((targetTask: any) => {
      if (targetTask !== task) {
        return targetTask;
      }
    }))
  }

  const dndChangeList = (itemId: string, targetId: string) => {
    [plannedTasks, inProcessTasks, finishedTasks].forEach(area => {
      for (let task of area.values()) {
        if (task.get('area') === targetId || targetId !== 'planned_area' && targetId !== 'process_area' && targetId !== 'finished_area') {
          return;
        }
        if (task.get('idItem') === itemId) {
          return changeTaskArea(task, targetId, itemId);
        }
      }
    })
  }

  const changeTaskArea = (task: any, targetId: any, itemId: any) => {
    let clone = new Map([...task]);
    clone.set('area', targetId);

    switch (targetId) {
      case 'planned_area':
        setPlannedTasks([...plannedTasks, clone]);
        break;
      case 'process_area':
        setInProcessTasks([...inProcessTasks, clone]);
        break;
      case 'finished_area':
        clone.set('finishTime', Date.now())
        setFinishedTasks([...finishedTasks, clone]);
        setCounterFinished(counterFinished + 1);

        break;
      default:
        break;
    }
    checkAreaElemWillBeDeleted(task);
  }

  const edit = (item: HTMLElement, editText: string, editId: string) => {
    [plannedTasks, inProcessTasks, finishedTasks].forEach(areas => {
      for (let task of areas.values()) {
        if (task.get('idItem') === editId) {
          if (item.className === 'title_text') {
            task.set('titleText', editText);
            // extraRenderFor LS change with edit
            extraRender();
            return;
          } else if (item.className === 'description_text') {
            task.set('descriptionText', editText);
            // extraRenderFor LS change with edit
            extraRender();
            return;
          }
        }
      }
    })
  }

  const extraRender = () => {
    updateState === '' ? setUpdateState('new') : setUpdateState('');
  }

  const calcMiddleFinishTime = () => {
    let taskPeriodsTime: number = 0;
    for (let task of finishedTasks) {
      let taskPeriodMS = task.get('finishTime') - task.get('idItem');
      taskPeriodsTime += taskPeriodMS;
    }


    taskPeriodsTime = taskPeriodsTime / finishedTasks.length;
    if (taskPeriodsTime) {
      let middleTasksPeriod = getCorrectTimeFromMillisec(taskPeriodsTime);
      setCounterMiddleTime(middleTasksPeriod);
    } else {
      let middleTasksPeriod = getCorrectTimeFromMillisec(0);
      setCounterMiddleTime(middleTasksPeriod);
    }



  }

  const getCorrectTimeFromMillisec = (millisec: any) => {
    let seconds: any = Math.floor(millisec / 1000) % 60;
    let minutes: any = Math.floor(millisec / 1000 / 60) % 60;
    let hours: any = Math.floor(millisec / 1000 / 60 / 60) % 24;
    let days: any = Math.floor(millisec / 1000 / 60 / 60 / 24);
    return <>{days} days : {hours} hours : {minutes} min : {seconds} sec</>;
  }



  return (
    <div className='wrap'>
      <Nav />
      <TodoContext.Provider value={
        {
          plannedTasks,
          inProcessTasks,
          finishedTasks,
          addTask,
          deleteTask,
          edit,
          dndChangeList,
          counterAdd,
          counterDelete,
          counterFinished,
          counterMiddleTime,
          setCounterAdd,
          setCounterDelete,
          setCounterFinished,
          setCounterMiddleTime,
          extraRender,
        }
      }>

        <Routes>
          <Route index element={<Home />} />
          <Route path='/todolist' element={<Todolist />} />
          <Route path='/statistic' element={<Statistic />} />
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
