import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { db } from "../config/firebase";
import { ViewGuestColumns } from "../UI/ViewGuestColumns";
import { Guest } from "./Guest";

export const ViewGuest = (props) => {
    const { id } = useParams();
    const [guestList, setGuestList]  = useState([]);
    const [result, setResult] = useState([]);
    // const [guestListId, setGuestListId]  = useState([]);
    // const [res, setRes] = useState([]);

    // const guestListUpdated = [];

    const guestsCollectionRef = collection(db, "guests");
    // const guestsCollectionRef = query(
    //     collection(db, "guests"),
    //     limit(100),
    //     where("product_id", "==", "6n6cVNI2VGRMQ3Yc8t7a")
    // );


    // let q = query(guestsCollectionRef,where('property_id','==',id))
    

    const getGuestList  = async () => {
        try {
            const data = await getDocs(guestsCollectionRef);
            console.log(data);

            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setGuestList(filteredData);


            // console.log(filteredData[14].property_id);

            // for (let i = 0; i < filteredData.length; i++) {
            //     if (filteredData[i].property_id === id) {
            //         guestListUpdated.push(id);
            //     }
            // }

            // console.log(guestListUpdated);
            // console.log(q);

            // console.log(q);
            // console.log(guestList[0].date_of_checkin.seconds);
            // console.log(guestList[14].date_of_checkin.seconds);
            // const { seconds } = guestList.nt;
        }
        catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getGuestList();
    }, []);

    return (
        <React.Fragment>
            <Paper
                sx={{
                    width: '100%',
                    overflow: 'scroll'
                }}
            >
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table aria-label='sticky table'>
                        <ViewGuestColumns />
                        <TableBody>
                            {
                                guestList.map((guest) => {
                                    return (
                                        <Guest guest = {guest} />
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