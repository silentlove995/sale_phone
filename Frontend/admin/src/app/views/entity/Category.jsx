import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import Button from "@mui/material/Button";
import CategoryList from "../material-kit/tables/CategoryList";

const Container = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {marginBottom: '16px'}
    }
}));

export const Category = () => {
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
        </Container>
    );
};
