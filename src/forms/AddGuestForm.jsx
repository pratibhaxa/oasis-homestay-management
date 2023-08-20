import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react"
import { useParams } from "react-router-dom";
import { auth, db } from "../config/firebase";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { LocalizationProvider, MobileDatePicker } from "@mui/x-date-pickers";
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const AddGuestForm = () => {
    const { id } = useParams();
    const guestsCollectionRef = collection(db, "guests");

    const phoneRegExp = /^[6-9]\d{9}$/;

    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);

    const formik = useFormik({
        initialValues: {
            fullName: '',
            phoneNumber: '',
            address: '',
            dateOfCheckin: '',
            dateOfCheckout: '',
            purposeVisit: '',
            roomNumber: '',
            
        },

        validationSchema: Yup.object({
            fullName: Yup
                .string()
                .max(255)
                .required('First Name is required'),
            phoneNumber: Yup
                .string()
                .matches(phoneRegExp, 'Phone number is not valid')
                .required('Phone Number is required'),
            address: Yup
                .string()
                .max(500)
                .required('Address is required'),
            // dateOfCheckin: Yup
            //     .date()
            //     .required('Date of Check-in is required'),
            //     // .min(yesterday, 'Date cannot be in the past'),
            // dateOfCheckout: Yup
            //     .date()
            //     .required('Date of Check-out is required')
            //     .min(Yup.ref('dateOfCheckin'), 'End date cannot be earlier than start date'),
            purposeVisit: Yup
                .string()
                .max(500)
                .required('Purpose of Visit is required'),
            roomNumber: Yup
                .string()
                .max(255)
                .required('Room Number is required'),
        }),
        
        onSubmit: async (values, helpers) => {
            try{
                await addDoc(guestsCollectionRef, {
                    full_name: values.fullName,
                    phone_number: values.phoneNumber,
                    address: values.address,
                    // change date input format to timestamp for firebase
                    date_of_checkin: startDate.$d,
                    date_of_checkout: endDate.$d,
                    purpose_visit: values.purposeVisit,
                    // id_card: values.idCard,
                    room_number: values.roomNumber,
                    // since ideally the user logged in will be the property manager
                    property_manager_email: auth?.currentUser?.uid,
                    property_id: {id}.id,
                    created_by_user: auth?.currentUser?.uid,
                });
                alert("Updated Successfully");
                // console.log('startDate');
                // console.log(startDate);
                // console.log('startDate.$d');
                // console.log(startDate.$d);
            }
            catch (err) {
                console.error(err);
            }
        }
    });

    return (
        <React.Fragment>
            <Box
            component="main"
                sx={{
                    display: 'flex',
                    flex: '1 1 auto',
                    backgroundColor: 'background.paper',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                
                <Box
                    sx={{
                        maxWidth:550,
                        px: 3,
                        py: '100px',
                        width: '100%'
                    }}
                >
                    <div>
                        <Stack
                            spacing={1}
                            sx={{
                                mb: 3
                            }}
                        >
                            <Typography variant="h4">
                                Add Guest
                            </Typography>
                        </Stack>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack spacing={3}>
                                {/* fullName */}
                                <TextField
                                    error={!!(formik.touched.fullName && formik.errors.fullName)}
                                    fullWidth
                                    helperText={formik.touched.fullName && formik.errors.fullName}
                                    label="Full Name"
                                    name="fullName"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.fullName}
                                />
                                {/* phoneNumber */}
                                <TextField 
                                    error={!!(formik.touched.phoneNumber && formik.errors.phoneNumber)}
                                    fullWidth
                                    helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
                                    label="Phone Number"
                                    name="phoneNumber"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.phoneNumber}
                                />
                                {/* address */}
                                <TextField 
                                    error={!!(formik.touched.address && formik.errors.address)}
                                    fullWidth
                                    helperText={formik.touched.address && formik.errors.address}
                                    label="Address"
                                    name="address"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.address}
                                />
                                {/* dateOfCheckin */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDatePicker
                                        fullWidth
                                        selectsStart
                                        required
                                        label="Check-in Date"
                                        selected={startDate}
                                        onChange={date => setStartDate(date)}
                                        startDate={startDate}
                                        format="DD-MM-YYYY"
                                    />
                                    
                                </LocalizationProvider>
                                {/* dateOfCheckout */}
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <MobileDatePicker
                                        fullWidth
                                        selectsEnd
                                        required
                                        label="Check-out Date"
                                        selected={endDate}
                                        onChange={date => setEndDate(date)}
                                        endDate={endDate}
                                        startDate={startDate}
                                        minDate={startDate}
                                        format="DD-MM-YYYY"
                                    />
                                </LocalizationProvider>
                                {/* roomNumber */}
                                <TextField 
                                    error={!!(formik.touched.roomNumber && formik.errors.roomNumber)}
                                    fullWidth
                                    helperText={formik.touched.roomNumber && formik.errors.roomNumber}
                                    label="Room Number"
                                    name="roomNumber"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.roomNumber}
                                />
                                {/* purposeVisit */}
                                <TextField 
                                    error={!!(formik.touched.purposeVisit && formik.errors.purposeVisit)}
                                    fullWidth
                                    helperText={formik.touched.purposeVisit && formik.errors.purposeVisit}
                                    label="Purpose of Visit"
                                    name="purposeVisit"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.purposeVisit}
                                />
                                
                                {/* idCard */}
                                {/* <Stack
                                    spacing={1}
                                    sx={{
                                        mb: 3
                                    }}
                                >
                                    <Typography variant="h6">
                                        Upload Id Card
                                    </Typography>
                                    <Stack direction="row" alignItems="center" spacing={2}>
                                        <Button variant="contained" component="label">
                                            Upload
                                            <input hidden accept="image/*" multiple type="file" />
                                        </Button>
                                        <IconButton color="primary" aria-label="upload picture" component="label">
                                            <input hidden accept="image/*" type="file" />
                                            <PhotoCamera />
                                        </IconButton>
                                    </Stack>
                                </Stack> */}
                                
                            </Stack>
                            {formik.errors.submit && (
                                <Typography
                                    color="error"
                                    sx={{ mt: 3 }}
                                    variant="body2"
                                >
                                    {formik.errors.submit}
                                </Typography>
                            )}
                            <Button
                                fullWidth
                                size="large"
                                sx={{ mt: 3 }}
                                type="submit"
                                background="teal"
                                variant="contained"
                            >
                                Add
                            </Button>
                        </form>
                    </div>
                </Box>
            </Box>
        </React.Fragment>
    )
};