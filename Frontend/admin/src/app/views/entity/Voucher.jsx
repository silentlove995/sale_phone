import {Box, Stack, styled} from '@mui/material';
import {Breadcrumb, SimpleCard} from 'app/components';
import Button from "@mui/material/Button";
import VoucherList from "../material-kit/tables/VoucherList";

const Container = styled('div')(({theme}) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {margin: '16px'},
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {marginBottom: '16px'}
    }
}));

export const Voucher = () => {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{name: 'Components', path: '/voucher'}, {name: 'Voucher'}]}/>
            </Box>
            <Stack spacing={3}>
                <SimpleCard title="Voucher List">
                    <span style={{float: 'right', marginBottom: '15px'}}><Button variant="outlined" onClick={() => {
                        alert("add Voucher");
                    }}>Add</Button></span>
                    <VoucherList/>
                </SimpleCard>
            </Stack>
        </Container>
    );
};
