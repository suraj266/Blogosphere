import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from '../../views/about/About'
import Contact from '../../views/contact/Contact'
// import ForgotPassword from '../../views/ForgotPassword'
import Home from '../../views/home/Home'
import AppBarView from '../navbar/AppBarView'
import Footer from '../footer/Footer'
import UserProfile from '../../views/profile/UserProfile'
import BlogList from '../../views/blogs/BlogList'
import BlogDetails from '../../views/blogs/BlogDetails'
import Blogs from '../../views/blogs/Blogs'
import Error from '../error/Error'
import CreateBlogs from '../../views/blogs/CreateBlogs'

const Routing = () => {
    return (
        <>
            <Router>
                <div style={{ height: '100%', minHeight: '100vh' }} className='router'>
                    <AppBarView />
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/post" element={<CreateBlogs />} />
                        <Route path="/my-profile" element={<UserProfile />} />
                        <Route path="/blogs" element={<Blogs />} >
                            <Route path="" element={<BlogList />} />
                            <Route path=":blogId" element={<BlogDetails />} />
                            <Route path="*" element={<Error />} />
                        </Route>

                        <Route path="*" element={<Error />} />
                    </Routes>
                    <Footer />
                </div>
            </Router>
        </>
    )
}

export default Routing