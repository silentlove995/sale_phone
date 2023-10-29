import {Button, Grid, Icon, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {useEffect, useState} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import ColorSelect from "../select/ColorSelect";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

const ProductForm = () => {
    const [state, setState] = useState({date: new Date()});

    useEffect(() => {
        ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
            return !(value !== state.password);
        });
        return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    }, [state.password]);

    const handleSubmit = (event) => {
        console.log(event);
        console.log(state);
    };

    const handleChange = (event) => {
        event.persist();
        setState({...state, [event.target.name]: event.target.value});
    };

    const {
        name,
        model,
        color,
        stockQuantity,
        description,
        technicalDescription,
        originalPrice,
        discount,
        salePrice,
        pictures,
    } = state;

    return (
        <div>
            <ValidatorForm onSubmit={handleSubmit} onError={() => null}>
                <Grid container spacing={6}>
                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                        <TextField
                            type="text"
                            name="name"
                            id="product-name"
                            value={name || ""}
                            onChange={handleChange}
                            errorMessages={["this field is required"]}
                            label="Product name"
                            validators={["required", "minStringLength: 4"]}
                        />

                        <TextField
                            type="text"
                            name="model"
                            label="Model"
                            onChange={handleChange}
                            value={model || ""}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />

                        <ColorSelect
                            name="color"
                            label="Color"
                            value={color || ""}
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />

                        <TextField
                            type="number"
                            name="stockQuantity"
                            label="Stock Quantity"
                            onChange={handleChange}
                            value={stockQuantity || ""}
                            errorMessages={["this field is required"]}
                            validators={["required"]}
                        />

                        <TextField
                            type="number"
                            name="salePrice"
                            onChange={handleChange}
                            label="Sale price"
                            value={salePrice || ""}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                        <TextField
                            type="text"
                            name="description"
                            value={description || ""}
                            label="Description"
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            name="technicalDescription"
                            type="text"
                            label="Technical description"
                            value={technicalDescription || ""}
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            type="number"
                            name="originalPrice"
                            onChange={handleChange}
                            label="Original price"
                            value={originalPrice || ""}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            type="number"
                            name="discount"
                            onChange={handleChange}
                            label="Discount"
                            value={discount || ""}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            type="file"
                            inputProps={{
                                multiple: true,
                                accept: "image/*"
                            }}
                            name="pictures"
                            onChange={handleChange}
                            label="Picture"
                            value={pictures || ""}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
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
};

export default ProductForm;
