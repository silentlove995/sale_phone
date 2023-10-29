import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import ProductList from "../material-kit/tables/ProductList";
import Button from "@mui/material/Button";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import ProductForm from "../material-kit/forms/ProductForm";
import Modal from "@mui/material/Modal";
import * as React from "react";

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

const style = {
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 1800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Product = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{name: 'Components', path: '/product'}, {name: 'Product'}]}/>
            </Box>
            <Stack spacing={3}>
                <SimpleCard title="Product List">
                    <span style={{float: 'right', marginBottom: '15px'}}><Button variant="outlined"
                                                                                 onClick={handleOpen}>Add</Button></span>
                    <ProductList/>
                </SimpleCard>
            </Stack>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
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
                        <ProductForm/>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};

export default Product;
