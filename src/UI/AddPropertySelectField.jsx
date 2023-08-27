import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { useFormik } from "formik";
import * as Yup from 'yup';
import React, { useEffect, useReducer, useState } from 'react';
import { Autocomplete, TextField } from '@mui/material';

const facilitiesList = [
    'Gym',
    'Swimming Pool',
    'AC',
    'Lift',
    'Power Backup',
    'Garden',
    'Kitchen',
    'Wifi',
    'Free Parking',
    'Geyser',
    'Refrigerator',
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
        },
    },
};

export const AddPropertySelectField = (props) => {
    const [facility, setFacility] = useState([]);
    // const facility = [];
    // const [facilitynew, setFacilitynew] = useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setFacility(value);
        // facility.push(value[0]);
        // setFacility(
        // // On autofill we get a stringified value.
        //     typeof value === 'string' ? value.split(',') : value,
        // );
        // props.getFacility(facility);
    };
    // // console.log(facility);
    props.getFacility(facility);

    const handleDelete = (e, value) => {
        e.preventDefault();
        setFacility(facility.filter((item) => item !== value));
        // facility.filter((item) => item !== value);
        // props.getFacility(facility);
    }

  return (
        <React.Fragment>
        {/* {selectedFacilities} */}
            <FormControl fullWidth>
                <InputLabel>Facilities</InputLabel>
                <Select
                    multiple
                    value={facility}
                    fullWidth
                    onChange={handleChange}
                    input={<OutlinedInput label="Facilities" />}
                    // renderInput={(facility) => <TextField {...facility} label="Facility" />}
                    renderValue={(selected) => (
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {
                            selected.map((value) => (
                                <Chip 
                                    key={value} 
                                    label={value} 
                                    clickable
                                    onMouseDown = {(e) => e.stopPropagation()}
                                    onDelete={(e) => handleDelete(e, value)}
                                />
                            ))
                        }
                        </Box>
                    )}
                    MenuProps={MenuProps}
                >
                    {facilitiesList.map((item) => (
                        <MenuItem
                            key={item}
                            value={item}
                        >
                            {item}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </React.Fragment>
    );
}