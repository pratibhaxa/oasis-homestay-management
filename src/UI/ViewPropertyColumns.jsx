import { TableCell, TableHead, TableRow } from "@mui/material";
import React from "react"

export const ViewPropertyColumns = (props) => {
    const columns = [
        {
            id: 'propertyName',
            label: 'Property Name',
            minWidth: 170
        },
        {
            id: 'address',
            label: 'Address',
            minWidth: 170,
            align: 'center'
        },
        {
            id: 'numOfRooms',
            label: 'Number of Rooms',
            minWidth: 170,
            align: 'center',
            // format: (value: number) => value.toLocaleString('en-US')
        },
        {
            id: 'facilities',
            label: 'Facilities',
            midWidth: 170,
            align: 'center'
        },
        {
            id: 'viewProperty',
            label: 'View Property',
            midWidth: 170,
            align: 'center'
        }
    ];

    return (
        <React.Fragment>
            <TableHead>
                <TableRow>
                    {
                        columns.map((column) => (
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