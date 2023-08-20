import { Box, Stack, Typography } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";
import { LoginForm } from "../forms/LoginForm";

export const Login = (props) => {
    return (
        <React.Fragment>
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
                    <LoginForm />
                </Box>
            </Box>
        </React.Fragment>
    )
};