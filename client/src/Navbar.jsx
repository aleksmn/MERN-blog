import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import UserContext from './contexts/UserContext';
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL;

const Navbar = () => {
    const user = useContext(UserContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        axios.get(apiUrl+'/logout')
        .then(res => {
            if(res.data === "Success")
            navigate(0)
        }).catch(err => console.log(err))
    }

    return (
        <nav className="navbar">
            <h3>MERN Blog App</h3>
            <div>
                <a href="/" className='link'>Home</a>
                {
                    user.username ?
                        <Link to="/create" className='link'>Create</Link>
                        : <></>
                }
                <a href="" className='link'>Contact</a>
            </div>
            {
            user.username ?
            <div>
                <span>{user.username}</span>&nbsp;
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
        }
        </nav>
    )
}


export default Navbar