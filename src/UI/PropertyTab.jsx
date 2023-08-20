import { Box, Paper, Tab, Tabs } from "@mui/material";
import React from "react";
import { Link, Outlet } from "react-router-dom";

export const PropertyTab = (props) => {
    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    
    return (
        <React.Fragment>
            <Paper elevation={3}>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Add Guest" to={`/viewproperty/${props.id}/add-guest`} component={Link} />
                        <Tab value="two" label="View Guest" to={`/viewproperty/${props.id}/view-guest`} component={Link} />
                        {/* <Tab value="three" label="View Guest Demo" to={`/viewproperty/${props.id}/view-guest-demo`} component={Link} /> */}
                    </Tabs>
                    <Outlet />
                </Box>
            </Paper>
        </React.Fragment>
    )
};