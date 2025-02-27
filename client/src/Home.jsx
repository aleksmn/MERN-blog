import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const apiUrl = import.meta.env.VITE_API_URL;

function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get(apiUrl + '/getposts')
    .then(posts => {
      setPosts(posts.data)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link key={post._id} to={`/post/${post._id}`} className='post'> 
          
          <img src={`${apiUrl}/images/${post.file}`} alt="" />
          <div className='post_text'>
            <h2>{post.title}</h2>
            <small>by <b>{post.email}</b></small>
            <p>{post.description}</p>
          </div>
          
          </Link>
        ))
      }
    </div>
  )
}

export default Home