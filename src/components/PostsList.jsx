
import { Link } from "react-router-dom"

import { useContext } from "react"

import PostsContext from "../contexts/PostsContext"





function PostsList() {

  const postsList = useContext(PostsContext)

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