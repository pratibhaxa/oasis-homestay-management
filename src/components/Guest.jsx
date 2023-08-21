import { TableCell, TableRow } from "@mui/material";
import React from "react"
import { useParams } from "react-router-dom";

export const Guest = (props) => {
    const { id } = useParams();

    return (
        <React.Fragment>
            <TableRow hover role='checkbox'>
                <TableCell>{props.guest.id}</TableCell>
                <TableCell>
                    {props.guest.full_name}
                </TableCell>
                <TableCell align='center'>
                    {props.guest.phone_number}
                </TableCell>
                <TableCell align='center'>
                    {props.guest.address}
                </TableCell>
                {/* <TableCell>
                    {new Date(guest.date_of_checkin).toDateString()}
                </TableCell> */}
                <TableCell align='center'>
                    {/* {new Date(guest.date_of_checkin).toString()} */}
                    {new Date((props.guest.date_of_checkout)*1000).toDateString()}
                </TableCell>
                <TableCell align='center'>
                    {new Date((props.guest.date_of_checkout)*1000).toDateString()}
                </TableCell>
                <TableCell align='center'>
                    {props.guest.room_number}
                </TableCell>
                <TableCell align='right'>
                    {props.guest.purpose_visit}
                </TableCell>
            </TableRow>
        </React.Fragment>
    )
};