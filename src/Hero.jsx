import './Hero.css'
import logoReact from './assets/react.svg'


export default function Hero()
{
    return (
        <>
        <div className="hero-container">
            <div> Fede is on React </div>
            <img className="logo-react" src={logoReact} alt="" />
        </div>
        </>
    )
}