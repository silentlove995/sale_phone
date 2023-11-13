import {Box, IconButton,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
import Modal from "@mui/material/Modal";
import Backdrop from "@mui/material/Backdrop";
import Fade from "@mui/material/Fade";
import {BrandUpdate} from "../update/BrandUpdate";
import React, {useEffect} from "react";
import {CategoryDetail} from "../details/CategoryDetail";
import {useDispatch, useSelector} from "react-redux";
import toast from "react-hot-toast";
import typeAction from "../../../redux/typeactions";
import Swal from "sweetalert2";

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

const CategoryList = () => {
    const dispatch = useDispatch();
    const [category, setCategory] = React.useState([]);
    const [openDetail, setOpenDetail] = React.useState(false);
    const [openUpdate, setOpenUpdate] = React.useState(false);
    let data = useSelector((state) => state.Admin.listCategory);

    const handleCloseDetail = () => {
        setOpenDetail(false);
    };
    const handleOpenDetail = () => setOpenDetail(true);
    const handleCloseUpdate = () => {
        setOpenUpdate(false);
    };
    const handleOpenUpdate = () => setOpenUpdate(true);

    useEffect(() => {
        if (data) {
            setCategory(data);
        }
    }, [data]);

    useEffect(() => {
        const loadCategory = toast.loading('Getting list category');
        dispatch({
            type: typeAction.GET_ALL_CATEGORY,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(loadCategory)
                    // toast.success('Success!')
                } else {
                    toast.dismiss(loadCategory)
                    toast.error(res)
                }
            },
        });
    }, [dispatch]);

    const info = (id) => {
        console.log(id);
        const loadCategory = toast.loading('Getting category by id');
        dispatch({
            type: typeAction.GET_CATEGORY_BY_ID,
            payload: id,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(loadCategory);
                    handleOpenDetail();
                    // toast.success('Success!')
                } else {
                    toast.dismiss(loadCategory)
                    toast.error(res)
                }
            },
        });
    };
    const edit = (id) => {
        console.log(id);
        const loadBrand = toast.loading('Getting category by id');
        dispatch({
            type: typeAction.GET_CATEGORY_BY_ID,
            payload: id,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(loadBrand);
                    handleOpenUpdate();
                } else {
                    toast.dismiss(loadBrand)
                    toast.error(res)
                }
            },
        });
    };

    const remove = (id) => {
        Swal.fire({
            title: "Are you sure to delete?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: typeAction.DELETE_CATEGORY,
                    payload: id,
                    callback: (res) => {
                        console.log('res', res);
                        if (res?.success) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your record has been deleted.",
                                icon: "success"
                            });
                        } else {
                            Swal.fire({
                                title: "Error!",
                                text: "Have some problem when delete.",
                                icon: "error"
                            });
                        }
                    },
                });
            }
        });
    }

    const columns: GridColDef[] = [
        {field: 'id', headerName: 'ID', flex: 1},
        {field: 'brandId', headerName: 'Brand Id', flex: 1},
        {field: 'name', headerName: 'Full name', flex: 1},
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
                                    onClick={() => info(params.id)}><InfoIcon/></IconButton>
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
                rows={category}
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
                aria-labelledby="brand-modal-info"
                aria-describedby="brand-modal-description"
                open={openDetail}
                onClose={handleCloseDetail}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openDetail}>
                    <Box sx={style}>
                        <CategoryDetail closeModal={() => {
                            handleCloseDetail();
                        }}/>
                    </Box>
                </Fade>
            </Modal>
            <Modal
                aria-labelledby="brand-modal-update"
                aria-describedby="brand-modal-description"
                open={openUpdate}
                onClose={handleCloseUpdate}
                closeAfterTransition
                slots={{backdrop: Backdrop}}
                slotProps={{
                    backdrop: {
                        timeout: 500,
                    },
                }}
            >
                <Fade in={openUpdate}>
                    <Box sx={style}>
                        <BrandUpdate closeModal={() => {
                            handleCloseUpdate();
                        }}/>
                    </Box>
                </Fade>
            </Modal>
        </Box>
    );
};

export default CategoryList;
