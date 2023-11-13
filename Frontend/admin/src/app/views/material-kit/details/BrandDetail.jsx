import {Button, FormLabel, Grid, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {TextValidator} from "react-material-ui-form-validator";
import {SimpleCard} from "../../../components";
import {connect, useSelector} from "react-redux";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
export const BrandDetail = (props) => {
    const brand = useSelector((state) => state.Admin.brandUpdate);
    console.log('brandUpdate: ', brand);
    const closeModal = () => {
        props.closeModal();
    };

    return (
        <div>
            <SimpleCard title="Brand Detail">
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <FormLabel>Brand ID : </FormLabel> {brand.id}
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Brand Name : </FormLabel> {brand.name}
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Created By : </FormLabel> {brand.createdBy}
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Created At : </FormLabel> {brand.createdAt}
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Updated By : </FormLabel> {brand.updatedBy}
                    </Grid>
                    <Grid item xs={6}>
                        <FormLabel>Updated At : </FormLabel> {brand.updatedAt}
                    </Grid>
                </Grid>
            </SimpleCard>
            <Button color="primary" variant="contained" type="button" onClick={closeModal}
                    style={{float: 'right', marginTop: '15px'}}>
                <Span sx={{pl: 1, textTransform: "capitalize"}}>Close</Span>
            </Button>
        </div>
    );
}
export default connect(({Admin: {brandUpdate}}) => ({
    brandUpdate,
}))(BrandDetail)
