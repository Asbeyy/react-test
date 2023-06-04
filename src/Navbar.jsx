import reactLogo from './assets/react.svg'
import './Navbar.css'

export default function Navbar(){


    return (
        <>
            <div className="navbar-container"> 
                <div className="left-elements">
                    <img className="logo" src={reactLogo} alt="" />
                    <label htmlFor=""> Fede </label>
                </div>
                <div className="right-elements">
                    <div>Home</div>
                    <div>Page</div>
                    <div>Contatti</div>
                </div>
            </div>
        </>
    )
}