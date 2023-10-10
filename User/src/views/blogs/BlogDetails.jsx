import { Container, IconButton, styled, } from '@mui/material';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RelatedBlogs from './RelatedBlogs';

const BlogDetails = () => {
    const { blogId } = useParams()
    console.log(blogId);
    return (
        <>
            <Container maxWidth="xl" className="d-flex d-wrap">
                <Container className='justify-item-center align-item-center' sx={{ flex: '1' }}>
                    <DivContent className='justify-item-center flex-column-center flex-column p-5' >

                        <ul className="d-flex align-items-center list-unstyled">
                            <li className="d-flex align-items-center me-3" style={{ gap: '10px', fontSize: '.9em', color: 'GrayText' }}>
                                <CalendarTodayOutlinedIcon fontSize='small' />
                                <span className="ms-1">28 April 2022</span>
                            </li>

                            <li style={{ gap: '10px', fontSize: '.9em', color: 'GrayText', }} className="d-flex align-items-center">
                                <PersonOutlineOutlinedIcon fontSize='small' />
                                <CustomSpan>By <Link style={{ textDecoration: 'none', cursor: 'pointer' }}><Span >Suraj Ojha</Span></Link></CustomSpan>
                            </li>
                        </ul>

                        <PostTitle className='mt-3'>
                            Creativity is nothing but a mind set free
                        </PostTitle>
                        <img src='https://picsum.photos/id/20/900/500' alt='imaged' style={{ borderRadius: '1em' }} />
                        <div className='mt-5'>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                                vitae aliquet mauris. Aliquam erat volutpat. Pellentesque commodo
                                ultrices feugiat. Suspendisse potenti. Sed hendrerit rutrum mauris,
                                et varius quam tincidunt nec. Donec viverra massa in est placerat,
                                vel fringilla risus varius. Vestibulum ac pharetra nisi. Curabitur
                                sagittis dolor et dapibus lacinia.
                            </p>
                        </div>
                    </DivContent>
                </Container>
                <Container sx={{ flex: '1' }} className='p-5'>
                    {/* Sidebar section */}
                    <AuthorDiv className='d-flex flex-column align-item-center' >
                        <img src='https://picsum.photos/100' alt='imaged' style={{ borderRadius: '50%', marginBottom: '1em' }} />
                        <h5><Link to='/my-profile'>Suraj Ojha</Link></h5>
                        <p className='text-center text-gray' >
                            <br />
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Aliquam at est nec nunc fringilla suscipit eu in quam. Proin
                        </p>

                        <ul style={{ gap: '0px' }} className="d-flex align-items-center list-unstyled">
                            <li><IconButton className='instagram'><InstagramIcon fontSize='small' /></IconButton></li>
                            <li><IconButton className='facebook'><FacebookIcon fontSize='small' /></IconButton></li>
                            <li><IconButton className='twitter'><TwitterIcon fontSize='small' /></IconButton></li>
                        </ul>
                    </AuthorDiv>
                    <div className="mt-5">
                        <span className="fs-4">Categories</span>
                        <ul className="mt-3 list-unstyled">
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Entertainment</Span>
                                </Link>
                            </li>
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Business</Span>
                                </Link>
                            </li>
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Creative</Span>
                                </Link>
                            </li>
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Lifestyle</Span>
                                </Link>
                            </li>
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Fashion</Span>
                                </Link>
                            </li>
                            <li className="text-gray mb-2">
                                <Link style={{ textDecoration: 'none', cursor: 'pointer' }}>
                                    <Span >Design</Span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </Container>

            </Container>
            <RelatedPost>
                <div className='justify-item-center align-item-center p-5 flex-column'>
                    <span className='fs-6'>YOU MAY ALSO LIKE</span>
                    <span className='fs-3'>Related Posts</span>
                </div>
                <div>
                    <RelatedBlogs />
                </div>
            </RelatedPost>
            <div className='justify-item-center align-item-center p-5 flex-column'>
                <span className='fs-4'>11 Comments</span>
            </div>



        </>
    )
}

export default BlogDetails

const DivContent = styled('div')({
    // border: '1px solid Black',
    // maxWidth: '80%',
})
const PostTitle = styled('h5')({
    fontSize: '30px',
    marginBottom: '1.5em'
})

const CustomSpan = styled('span')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '3px'
})


const Span = styled('span')({
    color: 'GrayText',
    transition: 'color 0.3s',
    '&:hover': {
        color: 'blue',
    },
})

const AuthorDiv = styled('div')({
    border: '.1px solid rgb(130, 130, 130, 0.4)',
    borderRadius: '1em',
    maxWidth: '18em',
    padding: '3em 3em 2em 3em'

})

const RelatedPost = styled('div')({
    backgroundColor: '#E8F0EE',
    height: '100vh',
})

// rrrnews.com