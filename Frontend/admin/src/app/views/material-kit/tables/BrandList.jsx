import {Box, IconButton,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {DataGrid, GridColDef} from '@mui/x-data-grid';
// import React from "react";

// const editUrl = "http://localhost:8080/api/brands/update/";
// const deleteUrl = "http://localhost:8080/api/brands/delete/";
// const infoUrl = "http://localhost:8080/api/brands/get/";

// const [post, setPost] = React.useState(null);
// const [info, setInfo] = React.useState(null);

const getInfo = (id) => {
    // alert("info: " + id);
    // axios.get(infoUrl + id).then((response) => {
    //     setPost(response.data);
    //     setInfo(response.data.data);
    //     console.log('brands: ', info);
    // });
    // if (!post) return null;
    console.log(id);
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

export default function BrandList(props) {
    console.log('brands: ', props);
    return (
        <Box width="100%" overflow="auto">
            <DataGrid
                rows={props.brandList}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {page: 0, pageSize: 5},
                    },
                }}
                pageSizeOptions={[5, 10, 15, 20, 50, 100]}
                // checkboxSelection
            />
        </Box>
    );
}
