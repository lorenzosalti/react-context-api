// react router import
import { BrowserRouter, Routes, Route } from "react-router-dom"

// context import
import PostsContext from "./contexts/PostsContext"

// pages import
import HomePage from "./pages/HomePage"
import AboutUs from "./pages/AboutUs"
import PostsPage from "./pages/PostsPage"
import PostDetail from "./pages/PostDetail"

// components import
import DefaultLayout from "./layouts/DefaultLayout"


function App() {


  return (
    <PostsContext.Provider>
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
