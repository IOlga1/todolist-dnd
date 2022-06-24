import '../../styles/home.scss';
import { HowToUse } from './welcomeCollumn/howToUseCollumn/HowToUse';
import { WelcomeCollumn } from './welcomeCollumn/welcomeCollumn';

export const Home = () => {
    return (
        <>
            <div className="home_wrap">
                <WelcomeCollumn />
                <HowToUse/>
            </div>
        </>
    )
}