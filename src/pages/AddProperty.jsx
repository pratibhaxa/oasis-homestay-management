import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useFormik } from "formik"
import * as Yup from 'yup';
import { Link } from "react-router-dom"
import { auth, db } from "../config/firebase";
import { addDoc, collection } from "firebase/firestore";
import { Header } from "./Header";

export const AddProperty = () => {
    const propertiesCollectionRef = collection(db, "properties");
    const formik = useFormik({
        initialValues: {
            propertyName: '',
            address: '',
            // city: '',
            // country: '',
            numOfRooms: '',
            facilities: '',
            propertyManagerEmail: ''
        },

        validationSchema: Yup.object({
            propertyName: Yup
                .string()
                .max(255)
                .required('Property Name is required'),
            address: Yup
                .string()
                .max(500)
                .required('Address is required'),
            // city: Yup   
            //     .string()
            //     .max(255)
            //     .required('City is required'),
            numOfRooms: Yup
                .number()
                .min(1, 'Number of Rooms must be greater than 0')
                .max(10)
                .required('Please enter number of Rooms'),
            facilities: Yup
                .string()
                .max(500)
                .required('facilities Available'),
            propertyManagerEmail: Yup
                .string()
                .email('Must be a valid email')
                .max(255)
                .required('Property Manager Email is required')
        }),

        onSubmit: async (values, helpers) => {
            try{
                await addDoc(propertiesCollectionRef, {
                    property_name: values.propertyName,
                    address: values.address,
                    num_of_rooms: values.numOfRooms,
                    facilities:values.facilities,
                    property_manager_email: values.propertyManagerEmail,
                    created_by_user: auth?.currentUser?.uid,
                });
                alert('Successfully added');
            }
            catch (err) {
                console.error(err);
            }
        }
    })
    return (
        <div>
            <Header />
            <br/><br/><br/><br/>
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
                                Add Property
                            </Typography>
                        </Stack>
                        <form onSubmit={formik.handleSubmit}>
                            <Stack spacing={3}>
                                <TextField
                                    error={!!(formik.touched.propertyName && formik.errors.propertyName)}
                                    fullWidth
                                    helperText={formik.touched.propertyName && formik.errors.propertyName}
                                    label="Property Name"
                                    name="propertyName"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.propertyName}
                                />
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
                                <TextField 
                                    error={!!(formik.touched.numOfRooms && formik.errors.numOfRooms)}
                                    fullWidth
                                    helperText={formik.touched.numOfRooms && formik.errors.numOfRooms}
                                    label="Number of Rooms"
                                    name="numOfRooms"
                                    type="number"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.numOfRooms}
                                />
                                <TextField 
                                    error={!!(formik.touched.facilities && formik.errors.facilities)}
                                    fullWidth
                                    helperText={formik.touched.facilities && formik.errors.facilities}
                                    label="Facilities"
                                    name="facilities"
                                    type="text"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.facilities}
                                />
                                <TextField 
                                    error={!!(formik.touched.propertyManagerEmail && formik.errors.propertyManagerEmail)}
                                    fullWidth
                                    helperText={formik.touched.propertyManagerEmail && formik.errors.propertyManagerEmail}
                                    label="Property Manager Email"
                                    name="propertyManagerEmail"
                                    type="email"
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.propertyManagerEmail}
                                />
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
        </div>

        
    )
}