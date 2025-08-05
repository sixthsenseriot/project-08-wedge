import { Box, Typography, Button, Chip } from "@mui/material";

const ProfileCard = () => {
    return (
        <Box sx={{ padding: 4, borderRadius: 2, backgroundColor: "#fff" }}>
            <Typography variant="h5" fontWeight="bold">
                FirstName LastName
            </Typography>
            <Typography variant="caption" color="textSecondary">
                Pronoun/Pronoun
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 1, marginBottom: 2 }}>
                Headline | Headline | Headline
            </Typography>
            <Button variant="contained" sx={{ marginRight: 1 }}>
                Experience
            </Button>
            <Button variant="outlined">Projects</Button>
            <Chip
                label="Software Engineering"
                sx={{ marginTop: 2, marginRight: 1 }}
            />
            <Chip label="Internship" sx={{ marginTop: 2, marginRight: 1 }} />
            <Chip label="Houston, TX" sx={{ marginTop: 2 }} />
        </Box>
    );
};

export default ProfileCard;
