import { Button, TableCell, TableRow } from "@mui/material";
import React from "react"
import { Link } from "react-router-dom";

export const PropertyList = (props) => {
    return (
        <React.Fragment>
            <TableRow hover role='checkbox'>
                <TableCell>
                    {props.property.property_name}
                </TableCell>
                <TableCell align='center'>
                    {props.property.address}
                </TableCell>
                <TableCell align='center'>
                    {props.property.num_of_rooms}
                </TableCell>
                <TableCell align='center'>
                    {props.property.facilities}
                </TableCell>
                <TableCell align='right'>
                    <Link to={`/viewproperty/${props.property.id}`}>
                        <Button sx={{ width: '100%' }} >View Property</Button>
                    </Link>
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
};