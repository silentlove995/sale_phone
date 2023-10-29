import {DatePicker} from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import {Button, Grid, Icon, styled,} from "@mui/material";
import {Span} from "app/components/Typography";
import {useEffect, useState} from "react";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";

const TextField = styled(TextValidator)(() => ({
    width: "100%",
    marginBottom: "16px",
}));

const ProductForm = () => {
    const [state, setState] = useState({date: new Date()});

    useEffect(() => {
        ValidatorForm.addValidationRule("isPasswordMatch", (value) => {
            if (value !== state.password) return false;

            return true;
        });
        return () => ValidatorForm.removeValidationRule("isPasswordMatch");
    }, [state.password]);

    const handleSubmit = (event) => {
    };

    const handleChange = (event) => {
        event.persist();
        setState({...state, [event.target.name]: event.target.value});
    };

    const handleDateChange = (date) => setState({...state, date});

    const {
        name,
        model,
        color,
        stockQuantity,
        description,
        technologyDescription,
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
                            id="sproduct-name"
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

                        <TextField
                            type="email"
                            name="email"
                            label="Email"
                            value={email || ""}
                            onChange={handleChange}
                            validators={["required", "isEmail"]}
                            errorMessages={["this field is required", "email is not valid"]}
                        />

                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                            <DatePicker
                                value={date}
                                onChange={handleDateChange}
                                renderInput={(props) => (
                                    <TextField
                                        {...props}
                                        label="Date picker"
                                        id="mui-pickers-date"
                                        sx={{mb: 2, width: "100%"}}
                                    />
                                )}
                            />
                        </LocalizationProvider>

                        <TextField
                            sx={{mb: 4}}
                            type="number"
                            name="creditCard"
                            label="Credit Card"
                            onChange={handleChange}
                            value={creditCard || ""}
                            errorMessages={["this field is required"]}
                            validators={["required", "minStringLength:16", "maxStringLength: 16"]}
                        />
                    </Grid>

                    <Grid item lg={6} md={6} sm={12} xs={12} sx={{mt: 2}}>
                        <TextField
                            type="text"
                            name="mobile"
                            value={mobile || ""}
                            label="Mobile Nubmer"
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            name="password"
                            type="password"
                            label="Password"
                            value={password || ""}
                            onChange={handleChange}
                            validators={["required"]}
                            errorMessages={["this field is required"]}
                        />
                        <TextField
                            type="password"
                            name="confirmPassword"
                            onChange={handleChange}
                            label="Confirm Password"
                            value={confirmPassword || ""}
                            validators={["required", "isPasswordMatch"]}
                            errorMessages={["this field is required", "password didn't match"]}
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
