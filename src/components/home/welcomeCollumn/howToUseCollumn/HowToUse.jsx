import '../../../../styles/howToUse.scss';
import firstslide from './firstslide.jpg';
import empty from '../../../../img/howToUse/empty.png'
import { useEffect, useRef } from 'react';


export const HowToUse = () => {

    const refUseCardWrap = useRef();

    useEffect(() => {
        refUseCardWrap.current.scrollTo(0, 2000);
    }, [])



    return (
        <div className="use_wrap">
            <div className='use_slider_wrap' ref={refUseCardWrap}>

                <div className='use_card'>
                    <img src={firstslide} alt="first slide"></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt="second slide"></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt="third slide"></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt=""></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt=""></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt=""></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt=""></img>
                </div>
                <div className='use_card'>
                    <img src={firstslide} alt=""></img>
                </div>
                <div className='use_card_empty'>
                    <img src={empty} alt=""></img>
                </div>
            </div>
        </div>
    )
}