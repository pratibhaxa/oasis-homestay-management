import { Box } from "@mui/material"
import { Link } from "react-router-dom"
import HouseIcon from '@mui/icons-material/House';

export const HouseIconImage = () => {
    return (
        <Box
            component="header"
            sx={{
                left: 0,
                p: 3,
                position: 'fixed',
                top: 0,
                width: '100%'
            }}
        >
            <Box
                sx={{
                    display: 'inline-flex',
                    height: 32,
                    width:  32
                }}
            >
                <Link
                    to='/'
                >
                    <HouseIcon/>
                </Link>
            </Box>
        </Box>
    )
}