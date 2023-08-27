import * as React from 'react';
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

const names = [
    'Oliver Hansen',
    'Van Henry',
    'April Tucker',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
];


export const AddPropertySelectField = () => {
    const [personName, setPersonName] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setPersonName(
        // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
        );

        // setPersonName((value) => {
        //     return {
        //         ...value,
        //         typeof value === 'string' ? value.split(',') : value
        //     };
        // });
        console.log(personName);
    };

  return (
        <div>
        <FormControl sx={{ m: 1, width: 300 }}>
            <InputLabel id="demo-multiple-chip-label">Chip</InputLabel>
            <Select
                labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                {selected.map((value) => (
                    <Chip key={value} label={value} />
                ))}
                </Box>
            )}
            MenuProps={MenuProps}
            >
            {names.map((name) => (
                <MenuItem
                key={name}
                value={name}
                >
                {name}
                </MenuItem>
            ))}
            </Select>
        </FormControl>
        </div>
    );
}


// const [facility, setFacility] = useState([]);
//     const inputValues = [];

//     const handleChange = (event) => {
//         const input = event.target.value;
//         // console.log(input);
//         inputValues.push(input[0]);
//         console.log(inputValues);
//     }

//     const handleDelete = (e, value) => {
//         for (let i = 0; i < )
//     }
    
    
    
//     const [facility, setFacility] = useState([]);
//     // const [facilitynew, setFacilitynew] = useState([]);

//     const handleChange = (event) => {
//         const {value, checked} = event.target;

//         if (checked) {
//             setFacility(pre => [...pre, value]);
//         }
//         else {
//             setFacility(pre => {
//                 return [...pre.filter(item => item===value)];
//             })
//         }
//     };
//     console.log(facility);

//     const handleDelete = (e, value) => {
//         e.preventDefault();
//         setFacility(facility.filter((item) => item !== value));
//         props.getFacility(facility);
//     }