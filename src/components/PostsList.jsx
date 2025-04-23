
import { useContext } from "react"

import PostsContext from "../contexts/PostsContext"

import PostCard from "./PostCard"





function PostsList() {

  const postsList = useContext(PostsContext)

  return (
    <>
      <ul className="container">
        {postsList.map(post => <PostCard key={post.id} post={post} />)}
      </ul>
    </>
  )
}

export default PostsList