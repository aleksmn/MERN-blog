import { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    axios.defaults.withCredentials = true;
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post(apiUrl+'/login', {email, password})
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
            } else {
                alert(res.data)
            }
        })
        .catch(err => console.log(err))
    }
  return (
    <div className='signup_container'>
        <div className='signup_form'>
            <h2>Login </h2>
            <br />
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label><br />
                    <input type="email" placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}/>
                </div>
                <br />
                <div>
                    <label htmlFor="password">Password:</label><br />
                    <input type="password" placeholder='********'
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <button className='signup_btn'>Login</button>
            </form>
            <br></br>
            <p>Not Registered?</p>
            <Link to="/register"><button>Signup</button></Link>
        </div>
    </div>
  )
}

export default Login