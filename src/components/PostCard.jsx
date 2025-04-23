import { Link } from "react-router-dom"



function PostCard({ post }) {

  return (

    <li>
      <Link to={`/posts/${post.id}`}><h4>{post.title}</h4></Link>
    </li>

  )
}

export default PostCard