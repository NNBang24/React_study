import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import {Link, useNavigate} from "react-router-dom"
import { login } from "../redux/slices/authSlice";
function Login () {
    const [username , setUsername] = useState('') ;
    const [password , setPassword] = useState('') ;
    const loading = useSelector(state => state.auth.loading) ;
    const error = useSelector(state => state.auth.error);
    const dispatch = useDispatch() ;
    const navigate = useNavigate()
    const handleSubmit = async(e) => {
        e.preventDefault() ;
        try {
            await dispatch(login({username , password})).unwrap() ;
            navigate('/')
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <form action="" onSubmit={handleSubmit}>
                <h2> Login</h2>
                {error && <p style={{color: 'red'}}>{error} </p>}
                <div>
                    <label htmlFor="username">Username :</label>
                    <input type="text" id="username" value={username} disabled ={loading}
                    onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password :</label>
                    <input type="password" id="password" value={password} disabled={loading}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <button type="submit" disabled={loading} >
                    {loading ? "loading in ... " : "Login"}
                </button>
                <p>
                    Don't have account 
                    <Link to={'/register'}>Register</Link>
                </p>
            </form>
        </>
    )
}

export default Login