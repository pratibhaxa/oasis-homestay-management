import { async } from "@firebase/util";
import { Button, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers"
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../config/firebase";

export const DateComponent = () => {
    const [date, setDate] = useState(new Date());
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const [dateList, setDateList] = useState([]);
    const [checkinDate, setCheckinDate] = useState(new Date());

    const dateCollectionRef = collection(db, "date");

    const addDate = async() =>   {
        // console.log('dateOfCheckin');
        // console.log(startDate);
        // console.log('dateOfCheckout');
        // console.log(endDate);

        try {
            await addDoc(dateCollectionRef, {
                date_of_checkin: startDate.$d,
                date_of_checkout: endDate.$d
            })
            alert('Success');
        }
        catch (err) {
            console.error(err);
            console.log('Date of Checkin');
            console.log(startDate.$d);
            console.log('Date of Checkout');
            console.log(endDate.$d);
        }
    }

    const getDate  = async () => {
        try {
            const data = await getDocs(dateCollectionRef);
            const filteredData = data.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }));
            setDateList(filteredData);
            setCheckinDate(filteredData.date_of_checkin);
            var checkinSeconds = checkinDate.seconds;
            Math.floor(new Date().getTime()/1000.0);
            var datee = Math.floor(new Date(checkinSeconds).getTime()/1000.0);
            console.log('datee', datee);
        }
        
        catch (err) {
            console.error(err);
        }
    };

    const columns = [
        {
            id: 'checkinDate',
            label: 'Check-in Date',
            minWidth: 170,
            align: 'center'
        },
        {
            id: 'checkoutDate',
            label: 'Check-out Date',
            minWidth: 170,
            align: 'center'
        }
    ]

    useEffect(() => {
        getDate();
    }, []);

    const handleCheckin = (props) => {
        // var hello = props.date.date_of_checkin.seconds
        return (
            <div>
                {props.date.date_of_checkin.seconds}
            </div>
        )
    }

    return (
        <div>
            <Stack spacing={3}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DatePicker
                        fullWidth
                        selectsStart
                        selected={startDate}
                        onChange={date => setStartDate(date)}
                        startDate={startDate}
                        format="DD-MM-YYYY"
                    />
                    <DatePicker
                        fullWidth
                        selectsEnd
                        selected={endDate}
                        onChange={date => setEndDate(date)}
                        endDate={endDate}
                        startDate={startDate}
                        minDate={startDate}
                        format="DD-MM-YYYY"
                    />
                </LocalizationProvider>
                <Button
                    fullWidth
                    size="large"
                    sx={{ mt: 3 }}
                    variant="contained"
                    onClick={addDate}
                >
                    Check Dates
                </Button>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table aria-label='sticky table'>
                        <TableHead sx={{backgroundColor: "teal"}}>
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
                                dateList.map((date) => {
                                    return (
                                        <TableRow hover role='checkbox'>
                                            <TableCell>
                                                {new Date((date.date_of_checkin.seconds)*1000).toDateString()}
                                            </TableCell>
                                            <TableCell align='center'>
                                                {new Date((date.date_of_checkout.seconds)*1000).toDateString()}
                                            </TableCell>
                                        </TableRow>
                                    )
                                })
                            }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Stack>
        </div>
    )
}