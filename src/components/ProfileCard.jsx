import { Box, Typography, Button, Chip } from "@mui/material";

import "./ProfileCard.css";

const ProfileCard = () => {
    return (
        <div className="ProfileCard">
            <Box sx={{ padding: 4, borderRadius: 2, backgroundColor: "#fff" }}>
                <Typography variant="h5" fontWeight="bold">
                    FirstName LastName
                </Typography>
                <Typography variant="caption" color="textSecondary">
                    Pronoun/Pronoun
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ marginTop: 1, marginBottom: 2 }}
                >
                    Headline | Headline | Headline
                </Typography>
                <Button>Experience</Button>
                <Button>Projects</Button>
                <Button>Show & Tell</Button>
                <Button>Interview</Button>
                <Button>Q&A</Button>
            </Box>
        </div>
    );
};

export default ProfileCard;
