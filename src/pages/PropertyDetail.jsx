import { AppBar, Box, Button, Card, Container, ListItem, Paper, Stack, Tab, Tabs, Typography } from '@mui/material';
import { collection, doc, getDoc, getDocs, getFirestore } from 'firebase/firestore';

import React, { useEffect, useState } from 'react'
import { Link, Outlet, Route, Routes, useParams } from 'react-router-dom'
import { db } from '../config/firebase';
import { AddGuest } from './AddGuest';
import { Header } from './Header';

export const PropertyDetail = () => {
    
    const [property, setProperty] = useState([]);
    const { id } = useParams();
    const db = getFirestore();
    const docRef = doc(db, "properties", id);

    const [value, setValue] = React.useState('one');

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const getPropertyDetail  = async () => {
        try {
            const docSnap = await getDoc(docRef);
            setProperty(docSnap.data());
            console.log({id}.id);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPropertyDetail();
    }, []);
    
    return (
        <div>
            <Header />
            <br/><br/><br/><br/>
            <Paper 
                elevation={3} 
                sx={{
                    width: '100%',
                    overflow: 'scroll',
                }}
            >
                <Stack spacing={-1}>
                    <ListItem>
                        <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Property Name : &nbsp;</Typography>
                        <Typography variant='p'>{property.property_name}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Address : &nbsp;</Typography>
                        <Typography variant='p'>{property.address}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Number of Rooms : &nbsp;</Typography>
                        <Typography variant='p'>{property.num_of_rooms}</Typography>
                    </ListItem>
                    <ListItem>
                        <Typography variant='h6' sx={{fontSize: "0.45cm"}}>Property Manager : &nbsp;</Typography>
                        <Typography variant='p'>{property.property_manager_email}</Typography>
                    </ListItem>
                </Stack>
            </Paper>
            <br/>
            <Paper elevation={3}>
                <Box sx={{ width: '100%' }}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        textColor="secondary"
                        indicatorColor="secondary"
                        aria-label="secondary tabs example"
                    >
                        <Tab value="one" label="Add Guest" to={`/viewproperty/${id}/add-guest`} component={Link} />
                        <Tab value="two" label="View Guest" to={`/viewproperty/${id}/view-guest`} component={Link} />
                    </Tabs>
                    <Outlet />
                </Box>
            </Paper>
        </div>
    )
}
