import { Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../config/firebase';
import { Header } from './Header';

export const ViewProperty = () => {
    const [propertyList, setPropertyList]  = useState([]);
    const propertiesCollectionRef = collection(db, "properties");

    const getPropertyList  = async () => {
        try {
            const data = await getDocs(propertiesCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setPropertyList(filteredData);
        }
        catch (err) {
            console.error(err);
        }
    };

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
    ]

    useEffect(() => {
        getPropertyList();
    }, []);

    return (
        <div>
            <Header />
            <br/><br/><br/><br/>
            <Paper
                sx={{
                    width: '100%',
                    overflow: 'scroll'
                }}
            >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table aria-label='sticky table'>
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
                        <TableBody>
                            {
                                propertyList.map((property) => {
                                    return (
                                        <TableRow hover role='checkbox'>
                                            <TableCell>
                                                {property.property_name}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {property.address}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {property.num_of_rooms}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {property.facilities}
                                            </TableCell>
                                            <TableCell align='right'>
                                                <Link to={`/viewproperty/${property.id}`}>
                                                    <Button sx={{ width: '100%' }} >View Property</Button>
                                                </Link>
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </div>
        
    )
}

export default ViewProperty;