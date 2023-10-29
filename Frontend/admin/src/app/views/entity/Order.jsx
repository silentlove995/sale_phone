import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import OrderList from "../material-kit/tables/OrderList";

const Container = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {marginBottom: '16px'}
    }
}));

export const Order = () => {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{name: 'Components', path: '/order'}, {name: 'Order'}]}/>
            </Box>
            <Stack spacing={3}>
                <SimpleCard title="Order List">
                    {/*<span style={{float: 'right', marginBottom: '15px'}}><Button variant="outlined" onClick={() => {*/}
                    {/*    alert("add order");*/}
                    {/*}}>Add</Button></span>*/}
                    <OrderList/>
                </SimpleCard>
            </Stack>
        </Container>
    );
};

