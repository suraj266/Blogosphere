import React from 'react'
import BlogList from '../blogs/BlogList';

const Home = () => {

  return (<>
    <>
      <div style={{ marginTop: '10em' }}>
        <div className='d-flex justify-content-center'>
          <div className='home-container'>
            <span>
              Blogosphere
            </span>
            <p>
              Write Your Thoughts
            </p>
          </div>
        </div>
        <BlogList />
      </div>
    </>
  </>
  )
}

export default Home;