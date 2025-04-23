// react router import
import { BrowserRouter, Routes, Route } from "react-router-dom"

// react import
import { useEffect, useState } from "react"

// context import
import PostsContext from "./contexts/PostsContext"

// axios import
import axios from "axios"

// pages import
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PostsPage from "./pages/PostsPage"
import PostDetail from "./pages/PostDetail"

// components import
import DefaultLayout from "./layouts/DefaultLayout"


const getPostsUrl = "https://jsonplaceholder.typicode.com/posts"


function App() {
  const [postsList, setPostsList] = useState([])

  useEffect(() => {
    axios.get(getPostsUrl)
      .then(res => setPostsList(res.data))
      .catch(err => console.error(err))
  }, [])


  return (
    <PostsContext.Provider value={postsList}>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/posts" element={<PostsPage />} />
            <Route path="/posts/:id" element={<PostDetail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </PostsContext.Provider>
  )
}

export default App
