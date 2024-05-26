import React from 'react'
import { BrowserRouter as Router , Route , Routes, BrowserRouter } from 'react-router-dom'
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Footer from './components/Footer'
import PRoute from './components/PRoute'
import Home from './pages/Home'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import CreatePost from './pages/CreatePost'
import UpdatePost from './pages/UpdatePost'
import OnlyAdminPRoute from './components/OnlyAdminPrivateRoute'
import ScrollToTop from './components/ScrollToTop'
import PostPage from './pages/PostPage'
import Search from './pages/Search'
function App() {
  return (
   <Router>
    <ScrollToTop/>
    <Header/>
    <Routes>
    <Route  path='/' element={<Home/>}/>
      <Route  path='/signin' element={<SignIn/>}/>
      <Route  path='/signup' element={<SignUp/>}/>
      <Route path='/search' element={<Search />} />
      <Route element={<PRoute/>}>
      <Route path='/dashboard' element={<Dashboard/>}/>
      </Route>
      <Route element={<OnlyAdminPRoute/>}>
        <Route path='/create-post' element={<CreatePost/>}/>
        <Route path='/update-post/:postId' element={<UpdatePost />} />

        </Route>
        <Route path='/post/:postSlug' element={<PostPage />} />

    </Routes>
    <Footer/>
   </Router>
  )
}

export default App
