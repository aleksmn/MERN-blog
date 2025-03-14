import axios from "axios";
import { useContext, useState } from "react";
import UserContext from './contexts/UserContext';

const apiUrl = import.meta.env.VITE_API_URL;

function CreatePost() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const [file, setFile] = useState()
    const user = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData()
        formData.append('title', title)
        formData.append('description', description)
        formData.append('email', user.email)
        formData.append('file', file)

        axios.post(apiUrl+'/create', formData)
        .then(res => {
            if(res.data === "Success") {
                window.location.href = "/"
            }
        })
        .catch(err => console.log(err))
    }

  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
            <h2>Create Post</h2>
          <input type="text" placeholder="Enter Title" required onChange={e => setTitle(e.target.value)}/>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            required
            placeholder="Enter Description"
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <input type="file" className="file" placeholder="Select File" 
          onChange={e => setFile(e.target.files[0])} required/>
          <button>Post</button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;