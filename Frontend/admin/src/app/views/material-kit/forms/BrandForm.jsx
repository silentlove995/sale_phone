import {Button, Grid, Icon, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {useState} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import axios from "axios";
import Swal from "sweetalert2";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));
const baseURL = "http://localhost:8080/api/brands/create";
export default function BrandForm(props) {
    const [state, setState] = useState("");
    const [post, setPost] = useState(null);
    const handleSubmit = () => {
        props.closeModal();
        // event.preventDefault();
        // console.log(state);
        const brand = {
            name: state.name
        };
        axios.post(baseURL, brand).then((response) => {
            setPost(response.data);
            console.log(post);
            console.log('response', response);
            const errCode = response.data.code;
            if (errCode === '00') {
                Swal.fire(
                    'Success!',
                    'Brand added successfully!',
                    'success'
                );
            } else {
                Swal.fire(
                    'Error!',
                    response.data.message,
                    'error'
                );
            }
        });
        if (!post) return null;
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
        </div>
    );
}
