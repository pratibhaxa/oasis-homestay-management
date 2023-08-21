import { doc, getDoc, getFirestore } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Header } from "./Header";
import { Paper } from "@mui/material";
import { PropertyDetail } from "./PropertyDetail";
import { PropertyTab } from "../UI/PropertyTab";

export const Property = (props) => {
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
            // console.log({id}.id);
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getPropertyDetail();
    }, []);

    return (
        <React.Fragment>
            <Header />
            <br/><br/><br/><br/>
            <Paper 
                elevation={3} 
                sx={{
                    width: '100%',
                    overflow: 'scroll',
                }}
            >
                <PropertyDetail property = {property} />
            </Paper>
            <br/>
            <PropertyTab id = {id} />
        </React.Fragment>
    )
};