import {BrowserRouter, Routes, Route} from 'react-router-dom'
import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./Navbar"
import Register from "./Register"
import Login from "./Login"
import Home from "./Home"
import CreatePost from "./CreatePost"
import Post from "./Post"
import EditPost from "./EditPost"
import UserContext from './contexts/UserContext'

const apiUrl = import.meta.env.VITE_API_URL;

function App() {
  const [user, setUser] = useState({
    username: null,
    email: null
  })

  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get(apiUrl)
    .then(user => {
      setUser(user.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <UserContext.Provider value={user}>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/create" element={<CreatePost />}></Route>
        <Route path="/post/:id" element={<Post />}></Route>
        <Route path="/editpost/:id" element={<EditPost />}></Route>
      </Routes>
    </BrowserRouter>
    </UserContext.Provider>
  )
}

export default App
