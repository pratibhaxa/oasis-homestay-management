import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react"

export const ViewGuestColumns = (props) => {
    const columns = [
        {
            id: 'fullName',
            label: 'Full Name',
            minWidth: 170
        },
        {
            id: 'phoneNumber',
            label: 'Phone Number',
            minWidth: 170,
            align: 'center'
        },
        {
            id: 'address',
            label: 'Address',
            minWidth: 170,
            align: 'center',
            // format: (value: number) => value.toLocaleString('en-US')
        },
        {
            id: 'startDate',
            label: 'Date of Check-in',
            midWidth: 170,
            align: 'center'
        },
        {
            id: 'endDate',
            label: 'Date of Check-out',
            midWidth: 170,
            align: 'center'
        },
        {
            id: 'purposeVisit',
            label: 'Purpose of Visit',
            midWidth: 170,
            align: 'center'
        },
        {
            id: 'roomNumber',
            label: 'Room  Number',
            midWidth: 170,
            align: 'center'
        }
    ];

    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                    {
                        columns.map((column) =>(
                            <TableCell
                                key={column.id}
                                align={column.align}
                                style={{ minWidth: column.minWidth }}
                            >
                                {column.label}
                            </TableCell>
                        ))
                    }
                </TableRow>
            </TableHead>
        </React.Fragment>
    )
};