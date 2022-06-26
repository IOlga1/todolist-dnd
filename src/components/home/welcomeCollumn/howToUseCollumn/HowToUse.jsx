import '../../../../styles/howToUse.scss';
import firstSlide from '../../../../img/howToUse/1use.jpg';
import secondSlide from '../../../../img/howToUse/2use.jpg';
import thirdSlide from '../../../../img/howToUse/3use.jpg';
import fourthSlide from '../../../../img/howToUse/4use.jpg';
import fifthSlide from '../../../../img/howToUse/5use.jpg';
import sixthSlide from '../../../../img/howToUse/6use.jpg';
import seventhSlide from '../../../../img/howToUse/7use.jpg';
import eighthSlide from '../../../../img/howToUse/8use.jpg';
import ninthSlide from '../../../../img/howToUse/9use.jpg';

import empty from '../../../../img/howToUse/empty.png'
import { useEffect, useRef, useState } from 'react';


export const HowToUse = () => {

    const refUseCardWrap = useRef();
    const [visible, setVisible] = useState('use_card');

    useEffect(() => {
        refUseCardWrap.current.scrollTo(0, 3400);
        setVisible('use_card use_card_visible');
    }, [])




    return (
        <div className="use_wrap">
            <div className='use_slider_wrap' ref={refUseCardWrap}>

                <div className={visible}>
                    <img src={ninthSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>You can also reset statistics</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={eighthSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>Click here and you will go to statistics</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={seventhSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>You can close the browser tab <br />
                            and return to the App page later. <br />
                            All tasks will be saved.</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={sixthSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>And you can delete the task <br />
                            from the list at all. Just click the button</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={fifthSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>If you want to edit any field <br />
                            in the task card, click this button <br />
                            and then rewrite the text you need.</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={fourthSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>You can take any card and drag it <br />
                            to the zone, which corresponds <br />
                            to the task execution stage</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={thirdSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>The added tasks will look like this.</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={secondSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>Type the title and description, then click <br />
                            the ADD button (of Enter on keyboard)</p>
                        <p>&#11015;</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className={visible}>
                    <img src={firstSlide} alt=""></img>
                    <div className='description_how_use'>
                        <p>Start adding the tasks - click here</p>
                        <p>&#11015;</p>
                    </div>
                </div>
                <div className='use_card_empty'>
                    <img src={empty} alt=""></img>
                </div>
            </div>
        </div>
    )
}