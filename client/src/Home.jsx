import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {

  const [posts, setPosts] = useState([])

  useEffect(() => {
    axios.get('/api/getposts')
    .then(posts => {
      setPosts(posts.data)
      console.log(posts)
    })
    .catch(err => console.log(err))
  }, [])

  return (
    <div className='posts_container'>
      {
        posts.map(post => (
          <Link key={post._id} to={`/post/${post._id}`} className='post'> 
          
          <img src={`/api/images/${post.file}`} alt="" />
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