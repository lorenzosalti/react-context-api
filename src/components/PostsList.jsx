import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"


const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"


function PostsList() {
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    axios.get(getPostsUrl)
      .then(res => setPostsList(res.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <>
      <ul className="container">
        {postsList.map(post => <li key={post.id}>
          <Link to={`/posts/${post.id}`}><h4>{post.title}</h4></Link>
        </li>)}
      </ul>
    </>
  )
}

export default PostsList