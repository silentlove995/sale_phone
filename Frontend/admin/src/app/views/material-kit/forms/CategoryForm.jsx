import {Button, Grid, Icon, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {useState} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {useDispatch} from "react-redux";
import toast from "react-hot-toast";
import typeAction from "../../../redux/typeactions";
import {SimpleCard} from "../../../components";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
export default function CategoryForm(props) {
    const [state, setState] = useState("");
    const dispatch = useDispatch();
    const handleSubmit = () => {
        const brand = {
            name: state.name
        };
        const createBrand = toast.loading('Creating brand');
        dispatch({
            type: typeAction.CREATE_BRAND,
            payload: brand,
            callback: (res) => {
                if (res?.success) {
                    toast.dismiss(createBrand)
                    toast.success('Create brand successfully!');
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
        setState({...state, [event.target.name]: event.target.value});
    };

    const {
        name,
    } = state;

    return (
        <div>
            <SimpleCard title="Add New Brand">
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
                        <Span sx={{pl: 1, textTransform: "capitalize"}}>Submit</Span>
                    </Button>
                </ValidatorForm>
            </SimpleCard>
        </div>
    );
}
