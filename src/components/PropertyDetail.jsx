import { ListItem, Stack, Typography } from "@mui/material";
import React from "react"

export const PropertyDetail = (props) => {
    return (
        <React.Fragment>
            <Stack spacing={-1}>
                <ListItem>
                    <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Property Name : &nbsp;</Typography>
                    <Typography variant='p'>{props.property.property_name}</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Address : &nbsp;</Typography>
                    <Typography variant='p'>{props.property.address}</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Number of Rooms : &nbsp;</Typography>
                    <Typography variant='p'>{props.property.num_of_rooms}</Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Property Manager : &nbsp;</Typography>
                    <Typography variant='p'>{props.property.property_manager_email}</Typography>
                </ListItem>
            </Stack>
        </React.Fragment>
    )
};