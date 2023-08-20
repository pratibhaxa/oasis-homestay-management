import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { RegisterForm } from '../forms/RegisterForm';

const Register = () => {
    return (
        <React.Fragment>
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
                    <RegisterForm />
                </Box>
            </Box>
        </React.Fragment>
    )
}

export default Register;