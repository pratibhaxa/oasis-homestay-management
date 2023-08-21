import React, { useEffect, useState } from "react"
import { Header } from "./Header";
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import { PropertyList } from "./PropertyList";
import { ViewPropertyColumns } from "../UI/ViewPropertyColumns";

export const ViewProperty = (props) => {
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

    useEffect(() => {
      
        getPropertyList();
    }, []);

    return (
        <React.Fragment>
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
                        <ViewPropertyColumns />
                        <TableBody>
                            {
                                propertyList.map((property) => {
                                    return (
                                        <PropertyList property = {property} />
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </React.Fragment>
    )
};

// ViewProperty -> PropertyList -> Property -> PropertyDetail , PropertyTab , AddGuest , ViewGuest