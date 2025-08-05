import { Grid, Box, Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import SideNavbar from "../layout/SideNavbar";

const ProfilePage = () => {
    return (
        <Grid container>
            <Grid item xs={2}>
                <SideNavbar />
            </Grid>
            <Grid item xs={8}>
                <ProfileCard />
            </Grid>
            <Grid item xs={2}>
                <Box sx={{ padding: 4 }}>
                    <Typography variant="h6" fontWeight="bold">
                        About Me
                    </Typography>
                    <Typography variant="body2">Experience</Typography>
                    <Typography variant="body2">Socials</Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ProfilePage;
