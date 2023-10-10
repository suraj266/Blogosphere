import { Button, FormControl, IconButton, InputLabel, MenuItem, Select, TextField, TextareaAutosize, styled } from '@mui/material'
import React, { useEffect } from 'react';
import MyVerticallyCenteredModal from '../../components/modal/MyVerticallyCenteredModal';
import AddIcon from '@mui/icons-material/Add';
import { CreateBlog, categoryList } from '../../components/services/context';
import CloseIcon from '@mui/icons-material/Close';

const CreateBlogs = (props) => {
    console.log("selectedImage : ", props.size)

    const [catList, setCategoryList] = React.useState([]);
    const [category, setCategory] = React.useState('');
    const [selectedImage, setSelectedImage] = React.useState('');
    const [title, setTitle] = React.useState('');
    const [description, setDescription] = React.useState('');

    const [open, setOpen] = React.useState(false);

    const handleChange = (event) => {
        setCategory(event.target.value);
    };



    const previewFiles = (file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setSelectedImage(reader.result);
        }
    }

    const handleImage = (e) => {
        e.preventDefault();
        const file = e.target.files[0];
        previewFiles(file);
    }


    useEffect(() => {
        if (open === true) {
            categoryList().then((res) => {
                setCategoryList(res)
            })
        }
    }, [open])

    const handleCreate = () => {
        const data = {
            image: selectedImage,
            title: title,
            description: description,
            category: category
        }
        CreateBlog(data)
        // const res = await CreateBlog(data)
        // console.log('response', res)
        // if (res === true) {
        //     setCategory('')
        //     setDescription('')
        //     setTitle('')
        //     setSelectedImage('')
        //     setOpen(false)
        // }
    }



    const Body = <PostDiv className='justify-item-center align-item-center gap-3'>
        <CeratePost className='justify-item-center flex-column'>

            <FileInput type="file" onChange={(e) => handleImage(e)} accept='image/png, image/jpeg, image/jpg' />

            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select Post Category</InputLabel>
                <Select
                    labelId="demo-simple-CustomSelect-label"
                    id="demo-simple-select"
                    label="Select Post Category"
                    value={category}
                    onChange={handleChange}
                >
                    {
                        catList.map((category) => {
                            return <MenuItem key={category.name} value={category._id}>{category.name}</MenuItem>
                        })
                    }

                </Select>
            </FormControl>

            <CustomTextField id="outlined-basic" value={title} onChange={(e) => setTitle(e.target.value)} label="Post Title" variant="outlined" />
            <StyledTextArea minRows={3} placeholder='Post Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <Button className='p-2' onClick={() => handleCreate()} variant="contained">Post</Button>
        </CeratePost>
        {selectedImage !== '' &&
            <>
                <ImageDiv>
                    <CloseButton onClick={() => setSelectedImage('')}>
                        <CloseIcon />
                    </CloseButton>
                    <img src={selectedImage} alt='blogimg' height={'365'} />
                </ImageDiv>
            </>
        }
    </PostDiv >

    return (
        <>
            <CustomDiv>
                {/* 
                <Button>
                    <ArrowBackIcon /> Go Back
                </Button> */}
                <Button variant='outlined' onClick={() => setOpen(true)}><AddIcon /> Create Post</Button>
                <MyVerticallyCenteredModal
                    show={open}
                    onHide={() => setOpen(false)}
                    heading={'Create Posts'}
                    body={Body}
                    size={selectedImage !== '' ? 'lg' : props.size}
                />
            </CustomDiv>
        </>
    )
}

export default CreateBlogs

const CustomDiv = styled('div')({
    display: 'flex',
    justifyContent: "space-around",
    alignItems: 'center',
})

const PostDiv = styled('div')({
    // border: '1px solid black',
    // marginTop: '5em'
    display: 'flex',
    // flexDirection: 'column'
})

const CeratePost = styled('div')({
    // border: '1px solid black',
    width: '80vw',
    gap: '1em'
})

const StyledTextArea = styled(TextareaAutosize)({
    padding: '11px',
    background: 'transparent',
})

const CustomTextField = styled(TextField)({
    borderRadius: '0px',
})

const FileInput = styled('input')({
    '&::-webkit-file-upload-button': {
        marginRight: '20px',
        border: 'none',
        background: '#084cdf',
        padding: '10px 20px',
        borderRadius: '10px',
        color: '#fff',
        cursor: 'pointer',
        transition: 'background .2s ease-in-out',

        // Additional properties can be added here
    },
    color: '#444',
    padding: '6px',
    borderRadius: '10px',
    border: '1px solid gray',
});

const ImageDiv = styled('div')({
    height: '365px',
    width: '100%',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #dce4f5, #084CDF)',
    padding: '1em',
    '@media (max-width: 990px)': {
        display: 'none',
    },
})

const CloseButton = styled(IconButton)({
    position: 'absolute',
    top: '0',
    right: '0',
    zIndex: '1', // Ensure the close button is above the image
    background: '#fff', // You can adjust the background color if needed
});

// 7509678415

