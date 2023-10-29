import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import Button from "@mui/material/Button";
import BrandList from "../material-kit/tables/BrandList";
import React from "react";
import Fade from "@mui/material/Fade";
import BrandForm from "../material-kit/forms/BrandForm";
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import axios from "axios";

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
const baseURL = "http://localhost:8080/api/brands/all";
export const Brand = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => {
        setOpen(false);
    }

    open === true ? getListBranch() : console.log('close');

    const [post, setPost] = React.useState(null);
    const [brands, setBrands] = React.useState(null);
    React.useEffect(() => {
        getListBranch();
    }, []);

    const getListBranch = () => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
            setBrands(response.data.data);
            console.log('brands: ', brands);
        });
    }

    if (!post) return null;
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{name: 'Components', path: '/brand'}, {name: 'Brand'}]}/>
            </Box>
            <Stack spacing={3}>
                <SimpleCard title="Brand List">
                    <span style={{float: 'right', marginBottom: '15px'}}><Button variant="outlined"
                                                                                 onClick={handleOpen}>Add</Button></span>
                    <BrandList brandList={brands}/>
                </SimpleCard>
            </Stack>
            <Modal
                aria-labelledby="brand-modal-title"
                aria-describedby="brand-modal-description"
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
                        <BrandForm closeModal={() => {
                            handleClose();
                        }}/>
                    </Box>
                </Fade>
            </Modal>
        </Container>
    );
};
