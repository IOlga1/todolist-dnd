import '../../styles/home.scss';
import { WelcomeCollumn } from './welcomeCollumn/welcomeCollumn';

export const Home = () => {
    return (
        <>
            <div className="home_wrap">
                <WelcomeCollumn />
                <p>Контент домашней</p>
            </div>
        </>
    )
}