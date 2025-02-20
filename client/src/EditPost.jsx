import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4000';

function EditPost() {
    const [title, setTitle] = useState()
    const [description, setDescription] = useState()
    const {id} = useParams()

    const handleSubmit = (e) => {
      e.preventDefault()

      axios.put(apiUrl+'/editpost/' + id, {title, description})
      .then(res => {
          if(res.data === "Success") {
              window.location.href = "/"
          }
      })
      .catch(err => console.log(err))
    }

    useEffect(() => {
      axios.get(apiUrl+'/getpostbyid/' + id)
      .then(result=> {
          setTitle(result.data.title)
          setDescription(result.data.description)
      })
      .catch(err => console.log(err))
  }, [id]); 


  return (
    <div className="post_container">
      <div className="post_form">
        <form onSubmit={handleSubmit}>
            <h2>Update Post</h2>
          <input type="text" placeholder="Enter Title" value={title} required onChange={e => setTitle(e.target.value)}/>
          <textarea
            name="desc"
            id="desc"
            cols="30"
            rows="10"
            required
            placeholder="Enter Description"
            defaultValue={description}
            onChange={e => setDescription(e.target.value)}
          ></textarea>
          <button>Update</button>
        </form>
      </div>
    </div>
  );
}

export default EditPost;