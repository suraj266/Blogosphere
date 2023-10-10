import React from 'react'
import ResponsiveDialog from '../../components/modal/ResponsiveDialog'
import { IconButton, styled } from '@mui/material'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar } from '@mui/material';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import DoneIcon from '@mui/icons-material/Done';
import MessageIcon from '@mui/icons-material/Message';

const FollowersList = [
    {
        id: 1,
        name: 'Hemant Ojha',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 2,
        name: 'John Doe',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 3,
        name: 'Jane Smith',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 4,
        name: 'Alice Johnson',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 5,
        name: 'Robert Brown',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 6,
        name: 'Emily Davis',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <DoneIcon />
            </IconButton>
        </span>
    },
    {
        id: 7,
        name: 'Michael Wilson',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <DoneIcon />
            </IconButton>
        </span>
    },
    {
        id: 8,
        name: 'Olivia Thompson',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <DoneIcon />
            </IconButton>
        </span>
    },
    {
        id: 9,
        name: 'William Clark',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <PersonAddIcon />
            </IconButton>
        </span>
    },
    {
        id: 10,
        name: 'Sophia Hernandez',
        icon: <span className='d-flex'>
            <IconButton>
                <MessageIcon />
            </IconButton>
            <IconButton>
                <DoneIcon />
            </IconButton>
        </span>
    },
];

const Followers = (props) => {

    const title = 'Followers'

    const content = FollowersList.map((data) => {
        return <CustomBox key={data.id} sx={{ flexGrow: 1, backgroundColor: 'green', borderRadius: '20px', margin: '1em 0' }}>
            <Grid container className='justify-item-center align-item-center' spacing={2} style={{ padding: '0.4em 2em 0.4em 0.9em' }}>
                <Grid className='align-item-center' xs={9}>
                    <Avatar alt={data.name} src="/static/images/avatar/1.jpg" />&nbsp;&nbsp;
                    <div >
                        <span style={{ fontSize: '15px', margin: '0 0 0 5px', fontWeight: 'bold' }}>{data.name}</span>
                    </div>
                </Grid>
                <Grid xs={3}>
                    {data.icon}
                </Grid>
            </Grid>
        </CustomBox>

    })

    return (
        <>
            <ResponsiveDialog
                open={props.Open}
                onClose={props.onHide}
                Title={title}
                Content={content}
            />
        </>
    )
}

export default Followers

const CustomBox = styled(Box)({
    background: 'linear-gradient(to right, #e8f0ee, #cff7e4, #e8f0ee)',
})
