import {Box, IconButton,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import {connect, useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import toast from "react-hot-toast";
import typeAction from "../../../redux/typeactions";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import BrandForm from "../forms/BrandForm";
import Modal from "@mui/material/Modal";

export const BrandList = () => {
    const dispatch = useDispatch();
    const [brands, setBrands] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    let data = useSelector((state) => state.Admin.listBrand);
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => setOpen(true);
    useEffect(() => {
        if (data) {
            setBrands(data);
        }
    }, [data]);

    useEffect(() => {
        const loadBrand = toast.loading('Getting list brand');
        dispatch({
            type: typeAction.GET_ALL_BRAND,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(loadBrand)
                    // toast.success('Success!')
                } else {
                    toast.dismiss(loadBrand)
                    toast.error(res)
                }
            },
        });
    }, [dispatch]);

    const getInfo = (id) => {
        console.log(id);
        const loadBrand = toast.loading('Getting brand by id');
        dispatch({
            type: typeAction.GET_ALL_BRAND,
            payload: id,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(loadBrand);
                    handleOpen();
                    // toast.success('Success!')
                } else {
                    toast.dismiss(loadBrand)
                    toast.error(res)
                }
            },
        });
    };
    const edit = (index) => {
        alert("edit: " + index);
    };

    const remove = (index) => {
        alert("remove: " + index);
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'name', headerName: 'Name', flex: 1},
        {field: 'createdBy', headerName: 'Created By', flex: 1},
        {field: 'createdAt', headerName: 'Created At', flex: 1},
        {
            field: "action",
            headerName: "Action",
            align: 'left',
            width: 150,
            renderCell: (params) => {
                return (
                    <strong>
                        <IconButton aria-label="info" color="primary"
                                    onClick={() => getInfo(params.id)}><InfoIcon/></IconButton>
                        <IconButton aria-label="edit" color="secondary"
                                    onClick={() => edit(params.id)}><EditIcon/></IconButton>
                        <IconButton aria-label="delete" color="error"
                                    onClick={() => remove(params.id)}><DeleteIcon/></IconButton>
                    </strong>
                );
            },
        },
    ];

    return (
        <Box width="100%" overflow="auto">
            <DataGrid
                rows={brands}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10, 15, 20, 50, 100]}
                // checkboxSelection
            />
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
        </Box>
    );
}

export default connect(({Admin: {listBrand}}) => ({
    listBrand,
}))(BrandList)
