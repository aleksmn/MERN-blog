import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        
    }

    return ( 
        <div className='signup_container'>
        <div className='signup_form'>
            <h2>Sign Up</h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Username:</label> <br />
                    <input type="text" placeholder='Enter username'/>
                </div>
                <br />
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Enter Email'/>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='********'/>
                </div>
                <button className='signup_btn'>Sign up</button>
            </form>
            <br></br>
            <p>Already have account?</p>
            <Link to="/login"><button>Login</button></Link>
        </div>
    </div>
     );
}
 
export default Register;