import axios from 'axios'
import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { userContext } from './App'

const apiUrl = import.meta.env.VITE_API_URL;

function Post() {
    const {id} = useParams()
    const [post, setPost] = useState({})
    const navigate = useNavigate()
    const user = useContext(userContext)


    useEffect(() => {
        axios.get(apiUrl+'/getpostbyid/'+id)
        .then(result=> setPost(result.data))
        .catch(err => console.log(err))
    })

    const handleDelete = (id) => {
        axios.delete(apiUrl+'/api/deletepost/'+id)
        .then(()=> {
            navigate('/')
        })
        .catch(err => console.log(err))
    }

  return (
    <div className='post_container'>
        <div className='post_post'>
            <img src={apiUrl+`/images/${post.file}`} alt="" />
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <div>
                {
                    user.email === post.email ? 
                    <>
                    <Link className='btn' to={`/editpost/${post._id}`}><button>Edit</button></Link>
                    <button className='btn' onClick={() => handleDelete(post._id)}>Delete</button>
                    </> : <></>
                }
                
            </div>
        </div>        
    </div>
  )
}

export default Post