import React from 'react'
import ActionAreaCard from '../../components/cards/Cards'
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { IconButton, styled } from '@mui/material';
import { Link } from 'react-router-dom';

const AnimatedIconButton = motion(IconButton);
const iconVariants = {
    initial: { scale: 0.8 },
    clicked: { scale: 0.8, color: 'red' },
};

const blogId = 1

const words = 'Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica'

const BlogList = () => {

    const [isClicked, setIsClicked] = React.useState(false);

    const handleClick = () => {
        setIsClicked(!isClicked);
    };

    const Content = <>
        <p>17 June 2023</p>
        <h6>Nature</h6>
        <Typography variant="body3" color="text.secondary">
            {
                words.length > 100 ?
                    <>
                        {words.slice(0, 90)}... <Link to={`/blogs/${blogId}`} style={{ textDecoration: 'none', cursor: 'pointer' }}>read more</Link>
                    </> : words
            }
        </Typography>
        <br />
        <br />
        <FooterDiv>

            <Stack direction="row" spacing={1}>
                <Avatar sx={{ width: 34, height: 34 }} alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                <CustomSpan>By <Link style={{ textDecoration: 'none', cursor: 'pointer' }}><Span >Suraj Ojha</Span></Link></CustomSpan>
            </Stack>
            <Stack style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '13px', color: 'gray' }} direction="row" spacing={-1}>
                <AnimatedIconButton
                    variants={iconVariants}
                    initial="initial"
                    animate={isClicked ? 'clicked' : 'initial'}
                    onClick={handleClick}
                >
                    <FavoriteBorderIcon />
                </AnimatedIconButton>
                <span>28126</span>

            </Stack>
        </FooterDiv>
    </>

    return (
        <>
            <div className='action-card'>
                {
                    [1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => {
                        return <motion.div
                            key={item}
                            className='m-3'
                            initial={{ y: 100 }}
                            animate={{ y: 0 }}
                            transition={{ duration: 1, delay: item * 0.2 }}
                        >
                            <ActionAreaCard
                                imgUrl={'https://picsum.photos/200/300'}
                                Content={Content}
                                blogId={blogId}
                            />
                        </motion.div>
                    })
                }
            </div>
        </>
    )
}

export default BlogList


const CustomSpan = styled('span')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '13px',
    gap: '3px'
})

const FooterDiv = styled('div')({
    display: 'flex',
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'GrayText'
})

const Span = styled('span')({
    color: 'GrayText',
    transition: 'color 0.3s',
    '&:hover': {
        color: 'blue',
    },
})