import '../../styles/form.scss';
import React, { useRef, useState, useContext } from 'react';
import { TodoContext } from '../../App';
import { formC } from '../../constants/constants';
import { ContextPropses } from '../../interfaces/interfaces';


export const Form = () => {
    const [plusMinus, setPlusMinus] = useState(formC.plus);
    const [inputArea, setInputArea] = useState(formC.hidden);
    const [unavailableBlock, setUnavailableBlock] = useState(true);
    const [titleText, setTitleText] = useState('');
    const [descriptionText, setDescriptionText] = useState('');
    const inputTitle = useRef<HTMLInputElement>(null);

    const mainPropses: ContextPropses = useContext(TodoContext);

    const changePlusMinus = (): void => {
        plusMinus === formC.plus ? setPlusMinus(formC.minus) : setPlusMinus(formC.plus);
        setUnavailableBlock(false);
        setTimeout(() => setUnavailableBlock(true), 300);
        changeInputAreaVisibility();
    }

    const changeInputAreaVisibility = (): void => {
        if (inputArea === formC.visible) {
            setInputArea(formC.hidden);
            inputTitle.current!.blur();
        } else {
            setInputArea(formC.visible);
            setTimeout(() => {
                inputTitle.current!.focus();
            }, 300)
        }
    }

    const changeInputsText = ({ target: { value, id } }: { target: { value: string, id: string } },): void => {
        id === 'title' ? setTitleText(value) : setDescriptionText(value);
    }

    const addTask = (event: React.MouseEvent<HTMLDivElement>): void => {
        event.preventDefault();
        if (titleText !== '') {
            mainPropses.addTask(toMap());
            setDefaultFormView();
        }
    }

    const toMap = (): {} => {
        const creationTime = new Date().toLocaleTimeString();
        const idItem = String(Date.now());
        const area = 'planned_area';
        const newTask = new Map([
            ['titleText', titleText],
            ['descriptionText', descriptionText],
            ['creationTime', creationTime],
            ['idItem', idItem],
            ['area', area]]);
        return newTask;
    }

    const setDefaultFormView = () => {
        setTitleText('');
        setDescriptionText('');
        inputTitle.current!.focus();
    }

    return (
        <>
            <form className={inputArea}>
                <div className='input_wrap title_input_wrap'>
                    <input type="text" className='title' id='title' ref={inputTitle} placeholder='title' value={titleText} onChange={changeInputsText} />
                </div>
                <div className='input_wrap description_input_wrap'>
                    <input type="text" className='description' id='description' placeholder='description' value={descriptionText} onChange={changeInputsText} />
                </div>
                <div className='button_submit_wrap' onClick={addTask}>
                    <button className='input_wrap button_submit' value='ADD' >ADD</button>
                </div>
            </form>
            <div className='plus_minus_wrap'>
                <div className='unavailable_plus_block' hidden={unavailableBlock}></div>
                <div className={plusMinus} onClick={changePlusMinus}></div>
            </div>
        </>
    )
}