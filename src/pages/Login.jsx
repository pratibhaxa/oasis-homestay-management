import { Box, Button, Stack, Tabs, TextField, Typography } from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useFormik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import { auth } from "../config/firebase";

export const Login = () => {
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
                window.open("https://localhost:3000/viewproperty",'_self');
                console.log(values.email);
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
        <Box
            sx={{
                backgroundColor: 'background.paper',
                flex: '1 1 auto',
                alignItems: 'center',
                display: 'flex',
                justifyContent: 'center'
            }}
        >
            <Box
                sx={{
                    maxWidth:550,
                    px: 3,
                    py: '100px',
                    width: '100%'
                }}
            >
                <div>
                    <Stack
                        spacing={1}
                        sx={{
                            mb: 3
                        }}
                    >
                        <Typography variant="h4">
                            Login
                        </Typography>
                        <Typography
                            color="text.secondary"
                            variant="body2"
                        >
                            Don&apos;t have an account?
                            &nbsp;
                            <Link
                                to='/auth/register'
                            >
                                Register
                            </Link>
                        </Typography>
                    </Stack>
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
                </div>
            </Box>
        </Box>
    )
}