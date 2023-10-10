import { styled } from '@mui/material/styles';
import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
// import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Unstable_Grid2';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import { Button, IconButton, Stack } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import GridOnIcon from '@mui/icons-material/GridOn';
import BlogList from '../blogs/BlogList';
import MyProfile from './MyProfile';
import Followers from '../followers/Followers';
import Following from '../followers/Following';
import { myProfile } from '../../components/services/context';
const tabData = [
    {
        icon: <GridOnIcon />,
        // label: 'My Post',
        content: <BlogList />

    },
    {
        icon: <BookmarkBorderIcon />,
        // label: 'Saved',
        content: <BlogList />,
    },
    {
        icon: <FavoriteBorderIcon />,
        // label: 'Liked',
        content: <BlogList />,
    },
];
const UserProfile = () => {

    const [value, setValue] = React.useState(0);
    const [openFollowers, setOpenFollowers] = React.useState(false);
    const [openFollowing, setOpenFollowing] = React.useState(false);
    const [name, setName] = useState('');
    const [image, setImage] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');


    const [openMyProfile, setOpenMyProfile] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    useEffect(() => {
        if (localStorage.getItem('token')) {

            myProfile().then((res) => {
                const { name, city, state, image } = res[0]
                setName(name);
                setCity(city);
                setState(state);
                setImage(image);
            })
        }
    }, []);



    return (
        <>
            <BaseDiv>
                <ImageDiv>
                    <img height={200} width={200} src={image} alt='profile'></img>
                </ImageDiv>
                {/* <ProfileDiv> */}
                <Box sx={{ display: 'flex', flexWrap: 'wrap', flexGrow: 1, width: '70%', padding: '1em' }}>
                    <GridHeader container spacing={2}>
                        <Grid xs={6}>
                            <h2>{name} <IconButton onClick={() => setOpenMyProfile(true)}> <EditIcon fontSize='medium' /> </IconButton></h2>

                            <h6 className='align-item-center' style={{ color: 'GrayText' }}><LocationOnIcon style={{ fontSize: '18px' }} />&nbsp; {` ${city} (${state})`}</h6>
                        </Grid>
                        <ButtonGrid xs={6}>
                            <Stack direction="row" spacing={2}>
                                <GradientButton onClick={() => setOpenFollowers(true)} variant="contained">
                                    Followers
                                </GradientButton>
                                <PGradientButton onClick={() => setOpenFollowing(true)} variant="outlined">
                                    Following
                                </PGradientButton>
                            </Stack>
                        </ButtonGrid>
                    </GridHeader>
                    <Grid xs={12} sx={{ maxWidth: '46.4em', marginTop: '1em', textAlign: 'justify' }}>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente laudantium voluptatum ad architecto at optio ducimus, ut nam saepe unde cupiditate sit explicabo ipsum excepturi quidem iste reprehenderit vitae alias! Error animi quisquam doloremque at, illum quos voluptatum totam obcaecati veritatis nostrum magnam eum fugiat, nulla ipsum! Odit, esse pariatur.</p>
                    </Grid>
                </Box>
                {/* </ProfileDiv> */}
                <TabDiv>
                    <div>
                        <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
                            {tabData.map((tab, index) => (
                                <Tab key={index} icon={tab.icon} label={tab.label} />
                            ))}
                        </Tabs>
                    </div>
                    <div className='d-wrap justify-item-center align-item-center' style={{ gap: '2em', padding: '1em 0' }}>
                        {tabData[value].content}
                    </div>
                </TabDiv>

            </BaseDiv>

            <MyProfile
                modalShow={openMyProfile}
                onHide={() => setOpenMyProfile(false)}
                size={'lg'}
            />
            <Followers
                Open={openFollowers}
                onHide={() => setOpenFollowers(false)}
            />
            <Following
                Open={openFollowing}
                onHide={() => setOpenFollowing(false)}
            />
        </>
    )
}

export default UserProfile

const TabDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '2em',
    width: '100%'
})

const BaseDiv = styled('div')({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '4em',
    padding: '3em 10em',
    '@media (max-width: 768px)': {
        padding: '3em 0',
    },
})

const ImageDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '50%',
    overflow: 'hidden',
    boxShadow: '0px 0px 142px 25px rgba(31, 64, 55, 0.15)',
})

const ButtonGrid = styled(Grid)({
    '@media (max-width: 768px)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& > .MuiStack-root': {
            '& > .MuiButtonBase-root': {
                padding: '16px 20px 13.5px 18px',
                fontSize: '11.5px'

            }
        },
    },
})

const GradientButton = styled(Button)(({ theme }) => ({
    background: `linear-gradient(to right, #529ff7, #0269de)`,
    color: theme.palette.common.white,
    borderRadius: '50px',
    fontSize: '13px',
    padding: '1.2em 2em ',
    '&:hover': {
        background: `linear-gradient(to right, #529ff7, #0269de)`,
    },
}));

const PGradientButton = styled(Button)(({ theme }) => ({
    borderRadius: '50px',
    fontSize: '13px',
    padding: '1.2em 2em ',
}));

const GridHeader = styled(Grid)({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    flexGrow: 1,
    '@media (max-width: 768px)': {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        '& > .MuiGrid2-root': {
            width: '100%'
        },
        '& > .MuiGrid2-root h2,h6': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        },
    },
})