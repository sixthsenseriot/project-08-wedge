import { Box, Typography } from "@mui/material";
import ProfileCard from "../components/ProfileCard";
import SideNavbar from "../layout/SideNavbar";

import "./ProfilePage.css";

const ProfilePage = () => {
    return (
        <div className="ProfilePage">
            <SideNavbar />

            <div className="card-container">
                <ProfileCard />
            </div>

            <Box>
                <Typography variant="h6" fontWeight="bold">
                    About Me
                </Typography>
                <Typography variant="body2">Experience</Typography>
                <Typography variant="body2">Socials</Typography>
            </Box>
        </div>
    );
};

export default ProfilePage;
