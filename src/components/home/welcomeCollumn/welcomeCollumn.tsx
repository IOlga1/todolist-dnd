import '../../../styles/welcomeCollumn.scss';
import { LogoSvg } from './logoSvg/LogoSvg';
import { TryButton } from './tryButton/TryButton';


export const WelcomeCollumn = () => {

    return (
        <div className='left_home_area_wrap'>
            <LogoSvg />
            <TryButton />
        </div>
    )
}