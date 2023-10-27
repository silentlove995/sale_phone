import { Stack } from '@mui/material';
import { Box, styled } from '@mui/material';
import { Breadcrumb, SimpleCard } from 'app/components';
import SimpleForm from '../material-kit/forms/SimpleForm';
import StepperForm from '../material-kit/forms/StepperForm';

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: { margin: '16px' },
    '& .breadcrumb': {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: { marginBottom: '16px' }
    }
}));

const Product = () => {
    return (
        <Container>
            <Box className="breadcrumb">
                <Breadcrumb routeSegments={[{ name: 'Material', path: '/material' }, { name: 'Form' }]} />
            </Box>

            <Stack spacing={3}>
                <SimpleCard title="Simple Form">
                    <SimpleForm />
                </SimpleCard>

                <SimpleCard title="stepper form">
                    <StepperForm />
                </SimpleCard>
            </Stack>
        </Container>
    );
};

export default Product;
