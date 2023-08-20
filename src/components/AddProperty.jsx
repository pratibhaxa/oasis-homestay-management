import React from "react"
import { Header } from "./Header";
import { Box, Stack, Typography } from "@mui/material";
import { AddPropertyForm } from "../forms/AddPropertyForm";

export const AddProperty = (props) => {
    return (
        <React.Fragment>
            <Header />
            <Box
            component="main"
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    backgroundColor: 'background.paper',
                    alignItems: 'center',
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
                            Add Property
                        </Typography>
                    </Stack>
                    <AddPropertyForm />
                </Box>
            </Box>
        </React.Fragment>
    )
};