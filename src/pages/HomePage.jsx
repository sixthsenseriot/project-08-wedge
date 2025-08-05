import { Grid, Box, Typography } from "@mui/material";

import SideNavbar from "../layout/SideNavbar";

const HomePage = () => {
    return (
        <div className="HomePage">
            <SideNavbar />
            <Box sx={{ padding: 4 }}>
                <Typography variant="h1">Under Construction</Typography>
            </Box>
        </div>
    );
};

export default HomePage;
