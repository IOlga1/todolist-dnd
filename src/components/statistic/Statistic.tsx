import '../../styles/statistic.scss';
import { useContext } from 'react';
import { TodoContext } from '../../App';
import { ButtonRemoveStat } from './buttonRemoveStat/ButtonRemoveStat';


export const Statistic = () => {

    const myContext: any = useContext(TodoContext);

    // console.log(myContext)



    return (
        <div className='dynamyc_area_stats'>
            <div className="title_statistic_wrap">
                <p>Statistic usage the APP</p>
            </div>
            <div className="statistic_wrap">
                <div className="stats_lists">


                    <div className="statistic_item">
                        <div>Всего добавлено задач</div>
                        <div>{myContext.counterAdd}</div>
                    </div>

                    <div className="statistic_item">
                        <div>Всего удалено задач</div>
                        <div>{myContext.counterDelete}</div>
                    </div>

                    <div className="statistic_item">
                        <div>Выполнено </div>
                        <div>{myContext.counterFinished}</div>
                    </div>

                    <div className="statistic_item">
                        <div>Среднее время выполнения</div>
                        <div className='medium_task_time'>{myContext.counterMiddleTime
                        }</div>
                    </div>
                </div>

                <div className='remove_stats_button_wrap'>
                    <ButtonRemoveStat />
                </div>

            </div>
        </div>

    )
}