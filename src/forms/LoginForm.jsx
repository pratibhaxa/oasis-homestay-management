import { Button, Stack, TextField, Typography } from "@mui/material"
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
import { auth } from "../config/firebase";
import { useNavigate } from 'react-router-dom';

export const LoginForm = (props) => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        validationSchema: Yup.object({
            email: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Email is required'),
            password: Yup
                .string()
                .max(255)
                .required('Password is required')
        }),

        onSubmit: async (values, helpers) => {
            try {
                const user = await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );
                navigate('/addproperty');
                // window.open("http://localhost:3001/addproperty",'_self');
                console.log(values.email);
                localStorage.setItem("email", values.email);
            }
            catch (err) {
                console.error(err);
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    })

    return (
        <React.Fragment>
            <form onSubmit={formik.handleSubmit}>
                <Stack spacing={3}>
                    <TextField 
                        error={!!(formik.touched.email && formik.errors.email)}
                        fullWidth
                        helperText={formik.touched.email && formik.errors.email}
                        label="Email Id"
                        name="email"
                        type="email"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.email}
                    />
                    <TextField 
                        error={!!(formik.touched.password && formik.errors.password)}
                        fullWidth
                        helperText={formik.touched.password && formik.errors.password}
                        label="Password"
                        name="password"
                        type="password"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        value={formik.values.password}
                    />
                </Stack>
                {formik.errors.submit && (
                    <Typography
                        color="error"
                        sx={{ mt: 3 }}
                        variant="body2"
                    >
                        {formik.errors.submit}
                    </Typography>
                )}
                <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    type="submit"
                    variant="contained"
                >
                    Continue
                </Button>
            </form>
        </React.Fragment>
    )
}