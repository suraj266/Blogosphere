import * as React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

export default function ResponsiveDialog(props) {
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));


    return (
        <div>
            <Dialog
                fullScreen={fullScreen}
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle className='d-flex justify-content-between' id="responsive-dialog-title">
                    {props.Title}
                    <IconButton onClick={props.onClose}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    {props.Content}
                </DialogContent>
            </Dialog>
        </div>
    );
}