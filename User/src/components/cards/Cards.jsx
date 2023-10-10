import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';


export default function ActionAreaCard(props) {


    return (
        <Card style={{ borderRadius: '4px' }} sx={{ maxWidth: 345 }}>
            <CardActionArea component={Link} to={`/blogs/${props.blogId}`}>
                <CardMedia
                    component="img"
                    height="200"
                    image={props.imgUrl}
                    alt="green iguana"
                />
            </CardActionArea>
            <CardContent className='card-containt'>
                {props.Content}
            </CardContent>
        </Card>
    );
}
