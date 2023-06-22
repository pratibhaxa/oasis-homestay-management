import { Box, Button, Grid, Stack, TextField, Typography } from "@mui/material";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import HouseIcon from '@mui/icons-material/House';
import { Link } from "react-router-dom";

export const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            // confirm_password: '',
            // submit: null
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
                .required('Password is required'),
            // confirm_password: Yup
            //     .string()
            //     .max(255)
            //     .required('Password is required'),
        }),

        onSubmit: async (values, helpers) => {
            try {
                const user = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );
                // router.push('/');
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
            component="main"
            sx={{
                display: 'flex',
                flex: '1 1 auto'
            }}
        >
            <Grid
                container
                sx={{
                    flex: '1 1 auto'
                }}
            >
                <Grid
                    xs={12}
                    lg={6}
                    sx={{
                        backgroundColor:'background.paper',
                        display: 'flex',
                        flexDirection:'column',
                        position: 'relative'
                    }}
                >
                    <Box
                        component="header"
                        sx={{
                            left: 0,
                            p: 3,
                            position: 'fixed',
                            top: 0,
                            width: '100%'
                        }}
                    >
                        <Box
                            sx={{
                                display: 'inline-flex',
                                height: 32,
                                width:  32
                            }}
                        >
                            <Link
                                to='/'
                            >
                                <HouseIcon/>
                            </Link>
                        </Box>
                    </Box>
                    <Box>
                        <Box
                            sx={{
                                flex: '1 1 auto',
                                alignItems: 'center',
                                display: 'flex',
                                justifyContent: 'center'
                            }}
                        >
                            <Box
                                sx={{
                                    maxWidth: 550,
                                    px: 3,
                                    py: '100px',
                                    width: '100%'
                                }}
                            >
                                <div>
                                    <Stack
                                        spacing={1}
                                        sx={{ mb: 3 }}
                                    >
                                        <Typography variant="h4">
                                            Register
                                        </Typography>
                                        <Typography
                                            color="text.secondary"
                                            variant="body2"
                                        >
                                            Already have an account?
                                            &nbsp;
                                            <Link
                                                to='/auth/login'
                                                underline="hover"
                                                variant="subtitle2"
                                            >
                                                Log in
                                            </Link>
                                        </Typography>
                                    </Stack>
                                    <form
                                        onSubmit={formik.handleSubmit}
                                    >
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
                                                helperText={(formik.touched.password && formik.errors.password)}
                                                label="Password"
                                                name="password"
                                                type="password"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.password}
                                            />
                                            {/* <TextField
                                                fullWidth
                                                label="Confirm Password"
                                                name="confirm_password"
                                                type="password"
                                                onBlur={formik.handleBlur}
                                                onChange={formik.handleChange}
                                                value={formik.values.confirm_password}
                                            /> */}
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
                    </Box>
                </Grid>
                <Grid
                    xs={12}
                    lg={6}
                    sx={{
                        alignItems: 'center',
                        background: 'radial-gradient(50% 50% at 50% 50%, #122647 0%, #090E23 100%)',
                        color: 'white',
                        display: 'flex',
                        justifyContent: 'center',
                        '& img': {
                            maxWidth: '100%'
                        } 
                    }}
                >
                    <Box
                        sx={{
                            p: 3
                        }}
                    >
                        <Typography
                            align="center"
                            color="inherit"
                            sx={{
                                fontSize: '24px',
                                lineHeight: '32px',
                                mb: 1
                            }}
                            variant="h1"
                        >
                            {/* move to footer */}
                            Welcome to{' '}
                            <Box
                                sx={{ 
                                    color: '#15B79E' 
                                }}
                                target="_blank"
                            >
                                Oasis Homestays
                            </Box>
                        </Typography>
                        <Typography
                            align="center"
                            sx={{ 
                                mb: 3 
                            }}
                            variant="subtitle1"
                        >
                            A product of Hyperaffix Pvt. Ltd. that helps manage AirBnb Properties.
                            
                        </Typography>
                        {/* <img
                            alt=""
                            src="/assets/auth-illustration.svg"
                        /> */}
                    </Box>
                </Grid>
            </Grid>
        </Box>
    );
};
