import { Link ,NavLink,Outlet } from "react-router-dom"
import './Admin.css'
function Admin () {
    return (
        <>
            <div>
                <h1> Admin Panel</h1>
                <nav style={{display : "flex" , flexDirection :'column' ,gap :'10px' , fontSize :'20px'}}>
                    <NavLink to={'jobs'}>Manage Jobs</NavLink>
                    <NavLink to={'add'}>Add Jobs</NavLink>
                </nav>
            </div>
            <Outlet/>
        
        </>
    )
}

export default Admin