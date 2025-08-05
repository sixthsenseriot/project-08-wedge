import { Link, useNavigate } from "react-router-dom";

import {
    Box,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    IconButton,
    Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import AddBoxIcon from "@mui/icons-material/AddBox";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

import "./SideNavbar.css";

import { supabase } from "../client";

const SideNavbar = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        navigate("/auth");
    };

    const navItems = [
        { text: "Home", icon: <HomeIcon />, route: "/home" },
        { text: "Profile", icon: <PersonIcon />, route: "/profile" },
        { text: "Search", icon: <SearchIcon />, route: "/search" },
        { text: "Bookmarks", icon: <BookmarkIcon />, route: "/bookmarks" },
        { text: "Post", icon: <AddBoxIcon />, route: "/post" },
        { text: "Settings", icon: <SettingsIcon />, route: "/settings" },
    ];

    return (
        <Box
            sx={{
                width: 250,
                height: "100vh",
                backgroundColor: "#f7f7f7",
                padding: 2,
            }}
        >
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0.8em 1em",
                }}
            >
                <ChangeHistoryIcon sx={{ mr: 1, color: "#659df2" }} />
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    href="/"
                    sx={{
                        fontFamily: "Noto Sans",
                        fontWeight: "bold",
                        letterSpacing: ".05rem",
                        color: "inherit",
                        textDecoration: "none",
                        fontStyle: "italic",
                    }}
                >
                    WEDGE
                </Typography>
            </Box>
            <List>
                {navItems.map((item) => (
                    <ListItem
                        button="true"
                        key={item.text}
                        component={Link}
                        to={item.route}
                        sx={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                <ListItem button="true" onClick={handleLogout}>
                    <ListItemIcon>
                        <LogoutIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
            </List>
        </Box>
    );
};

export default SideNavbar;
