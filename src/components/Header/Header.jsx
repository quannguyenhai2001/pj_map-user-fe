import { Typography, Box } from "@mui/material";


const Header = ({ title, subtitle }) => {

    return (
        <Box mb="30px">
            <Typography
                variant="h4"

                fontWeight="bold"
                sx={{ m: "0 0 5px 0" }}
            >
                {title}
            </Typography>
            <Typography variant="h5" >
                {subtitle}
            </Typography>
        </Box>
    );
};

export default Header;