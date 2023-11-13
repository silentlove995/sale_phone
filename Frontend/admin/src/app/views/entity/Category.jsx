import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import Button from "@mui/material/Button";
import CategoryList from "../material-kit/tables/CategoryList";
import React from "react";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import Modal from "@mui/material/Modal";
import CategoryForm from "../material-kit/forms/CategoryForm";

const Container = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {marginBottom: '16px'}
    }
}));

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export const Category = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{name: 'Components', path: '/category'}, {name: 'Category'}]}/>
            </Box>
            <Stack spacing={3}>
                <SimpleCard title="Category List">
                    <span style={{float: 'right', marginBottom: '15px'}}><Button variant="outlined" onClick={() => {
                        alert("add Category");
                    }}>Add</Button></span>
                    <CategoryList/>
                </SimpleCard>
            </Stack>
            <Modal
                aria-labelledby="category-modal-title"
                aria-describedby="category-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={open}>
                    <Box sx={style}>
                        <CategoryForm closeModal={() => {
                            handleClose();
                        }}/>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};
