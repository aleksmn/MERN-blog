import { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { userContext } from './App'
import axios from 'axios'

const Navbar = () => {
    const user = useContext(userContext)
    const navigate = useNavigate()

    const handleLogout = () => {
        console.log("logout")
        // axios.get('http://localhost:3001/logout')
        // .then(res => {
        //     if(res.data === "Success")
        //     navigate(0)
        // }).catch(err => console.log(err))
    }

    return (
        <nav className="navbar">
            <h3>MERN Blog App</h3>
            <div>
                <a href="" className='link'>Home</a>
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
                <input type="button" onClick={handleLogout} value="Logout" className='btn_input'/>
            </div>
            :
            <div><h5><Link to="/register" className="link">Register/Login</Link></h5></div>
        }
        </nav>
    )
}


export default Navbar