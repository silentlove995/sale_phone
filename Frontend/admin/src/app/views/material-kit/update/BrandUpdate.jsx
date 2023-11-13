import {Button, Grid, Icon, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {SimpleCard} from "../../../components";
import {connect, useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import toast from "react-hot-toast";
import typeAction from "../../../redux/typeactions";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
export const BrandUpdate = (props) => {
    const brand = useSelector((state) => state.Admin.brandUpdate);
    const [state, setState] = useState({name: brand.name});
    const dispatch = useDispatch();

    const handleSubmit = () => {
        const params = brand.id;
        const data = {
            name: state.name,
            id: brand.id,
        };
        const payload = {params, data}
        console.log(payload);
        const createBrand = toast.loading('Creating brand');
        dispatch({
            type: typeAction.UPDATE_BRAND,
            payload: payload,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(createBrand)
                    toast.success('Update brand successfully!');
                } else {
                    toast.dismiss(createBrand)
                    toast.error(res)
                }
            },
        });
        props.closeModal();
    };

    const handleChange = (event) => {
        event.persist();
        console.log('event: ', event.target.name, event.target.value);
        setState({...state, [event.target.name]: event.target.value});
    };

    const {name} = state;

    return (
        <div>
            <SimpleCard title="Brand Update">
                <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                    <Grid container spacing={12}>
                        <Grid item lg={12} md={12} sm={12} xs={12} sx={{mt: 2}}>
                            <TextField
                                type="text"
                                name="name"
                                id="brand-name"
                                value={name || ""}
                                onChange={handleChange}
                                errorMessages={["this field is required"]}
                                label="Brand name"
                                validators={["required", "minStringLength: 4"]}
                            />
                        </Grid>
                    </Grid>

                    <Button color="primary" variant="contained" type="submit" style={{float: 'right'}}>
                        <Icon>send</Icon>
                        <Span sx={{pl: 1, textTransform: "capitalize"}}>Update</Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </div>
    );
}
export default connect(({Admin: {brandUpdate}}) => ({
    brandUpdate,
}))(BrandUpdate)
