import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { date } from "yup";
import { db } from "../config/firebase";
import { Header } from "./Header";

export const ViewGuest = () => {
    const { id } = useParams();
    const [guestList, setGuestList]  = useState([]);
    const [checkinList, setCheckinList]  = useState([]);
    const [checkoutList, setCheckoutList]  = useState([]);
    const [checkinDate, setCheckinDate] = useState(new Date());
    const [result, setResult] = useState([]);

    const guestsCollectionRef = collection(db, "guests");

    const getGuestList  = async () => {
        try {
            const data = await getDocs(guestsCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setGuestList(filteredData);

            setResult(guestsCollectionRef.where('property_id', 'array-contains', {id}))


            // setCheckoutList(filteredData.date_of_checkout);
            // console.log('date_of_checkin');
            // console.log(filteredData[0].date_of_checkin.seconds);
            // const time = filteredData[0].date_of_checkin;
            // const timestamp = new Date(time);
            // console.log('toDateString');
            // console.log(timestamp.toUTCString());
            
            // console.log('timestamp');
            // console.log(timestamp);
            // // console.log('date_of_checkout');
            // // console.log(filteredData[0].date_of_checkout);
            // // console.log(checkinList);
            // console.log('-----------------------');
            console.log(guestList[0].date_of_checkin.seconds);
            console.log(guestList[14].date_of_checkin.seconds);
            // const { seconds } = guestList.nt;
        }
        catch (err) {
            console.error(err);
        }
    };

    // function timeConverter(){
    //     var a = new Date(UNIX_timestamp * 1000);
    //     var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    //     var year = a.getFullYear();
    //     var month = months[a.getMonth()];
    //     var date = a.getDate();
    //     var hour = a.getHours();
    //     var min = a.getMinutes();
    //     var sec = a.getSeconds();
    //     var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec ;
    //     return time;
    //   }
    //   console.log(timeConverter(0));

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
    ]

    useEffect(() => {
        getGuestList();
    }, []);

    return (
        <div>
            
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
                        <TableBody>
                            {
                                guestList.map((guest) => {
                                    return (
                                        <TableRow hover role='checkbox'>
                                            <TableCell>
                                                {guest.full_name}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {guest.phone_number}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {guest.address}
                                            </TableCell>
                                            {/* <TableCell>
                                                {new Date(guest.date_of_checkin).toDateString()}
                                            </TableCell> */}
                                            <TableCell align='center'>
                                                {/* {new Date(guest.date_of_checkin).toString()} */}
                                                {new Date((guest.date_of_checkout)*1000).toDateString()}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {new Date((guest.date_of_checkout)*1000).toDateString()}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {guest.room_number}
                                            </TableCell>
                                            <TableCell align='right'>
                                                {guest.purpose_visit}
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