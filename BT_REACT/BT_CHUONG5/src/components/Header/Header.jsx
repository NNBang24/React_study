import {NavLink} from 'react-router-dom'
import './Header.css'
function Header() {

    return (
        <>
            <nav className='nav-header'>
                <NavLink to={"/"} >Home</NavLink>
                <NavLink to={"/jobs"}>Jobs</NavLink>
            </nav>
        </>
    )
}

export default Header