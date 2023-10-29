import {Box, IconButton,} from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import {DataGrid, GridColDef} from '@mui/x-data-grid';

const info = (index) => {
    alert("info: " + index);
};
const edit = (index) => {
    alert("edit: " + index);
};

const remove = (index) => {
    alert("remove: " + index);
}

const columns: GridColDef[] = [
    {field: 'id', headerName: 'ID', flex: 1},
    {field: 'name', headerName: 'Full name', flex: 1},
    {field: 'date', headerName: 'Birth', flex: 1},
    {field: 'amount', headerName: 'Amount', flex: 1},
    {field: 'status', headerName: 'Status', flex: 1},
    {field: 'company', headerName: 'Company', flex: 1},
    // write action column with info, edit and delete buttons
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

const rows = [
    {
        id: 1,
        name: "john doe",
        date: "18 january, 2019",
        amount: 1000,
        status: "close",
        company: "ABC Fintech LTD.",
    },
    {
        id: 2,
        name: "kessy bryan",
        date: "10 january, 2019",
        amount: 9000,
        status: "open",
        company: "My Fintech LTD.",
    },
    {
        id: 3,
        name: "kessy bryan",
        date: "10 january, 2019",
        amount: 9000,
        status: "open",
        company: "My Fintech LTD.",
    },
    {
        id: 4,
        name: "james cassegne",
        date: "8 january, 2019",
        amount: 5000,
        status: "close",
        company: "Collboy Tech LTD.",
    },
];

const CategoryList = () => {

    return (
        <Box width="100%" overflow="auto">
            <DataGrid
                rows={rows}
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
};

export default CategoryList;
