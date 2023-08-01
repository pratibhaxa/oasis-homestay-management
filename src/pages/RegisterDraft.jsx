
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { auth } from '../config/firebase';
import { Link } from "react-router-dom";

const Page = () => {
    // const router = useRouter();
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
                window.open("http://localhost:3000/addproperty",'_self');
                console.log(values.email);
            }
            catch (err) {
                console.error(err);
                helpers.setStatus({ success: false });
                helpers.setErrors({ submit: err.message });
                helpers.setSubmitting(false);
            }
        }
    });

    return (
        <>
            {/* <Head>
                <title>
                    Register | Oasis Homestay Management
                </title>
            </Head> */}
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
        </>
    )
}


export default Page;