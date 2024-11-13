import { Link } from 'react-router-dom'

const Navbar = () =>  {
    return (
        <nav className="navbar">
            <h3>MERN Blog App</h3>
            <div>
                <a href="" className='link'>Home</a>
                <a href="" className='link'>Create</a>
                <a href="" className='link'>Contact</a>
            </div>
            <div><Link to="/register" className="link">Register/Login</Link></div>
        </nav>
    )
}


export default Navbar