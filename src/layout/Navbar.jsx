import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";

const pages = ["Search", "Explore", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const Navbar = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <AppBar position="static" color="black" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ position: "relative" }}>
                    {/* === MOBILE LAYOUT === */}
                    <Box
                        sx={{
                            display: { xs: "flex", md: "none" },
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        {/* === MOBILE: Hamburger menu (left) === */}
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{ mr: 1 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        {/* === MOBILE: Logo (center) === */}
                        <Box
                            sx={{
                                position: "absolute",
                                left: "50%",
                                transform: "translateX(-50%)",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <ChangeHistoryIcon
                                sx={{ mr: 1, color: "#659df2" }}
                            />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
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

                        {/* === MOBILE: Profile icon (right) === */}
                        {/* <Box sx={{ ml: "auto" }}>
                            <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip>
                        </Box> */}
                    </Box>

                    {/* ======================================================================== */}

                    {/* === DESKTOP LAYOUT === */}
                    <Box
                        sx={{
                            display: { xs: "none", md: "flex" },
                            width: "100%",
                            alignItems: "center",
                        }}
                    >
                        {/* === DESKTOP: Logo (left) === */}
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                mr: 2,
                            }}
                        >
                            <ChangeHistoryIcon
                                sx={{ mr: 1, color: "#659df2" }}
                            />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
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

                        {/* === DESKTOP: Nav buttons and profile picture (right) === */}
                        <Box
                            sx={{
                                ml: "auto",
                                display: "flex",
                                alignItems: "center",
                                gap: 2,
                            }}
                        >
                            {pages.map((page) => (
                                <Button
                                    key={page}
                                    onClick={handleCloseNavMenu}
                                    sx={{
                                        my: 2,
                                        color: "black",
                                        display: "block",
                                        fontFamily: "Noto Sans",
                                        fontWeight: "bold",
                                        textTransform: "none",
                                        border:
                                            page === "Login"
                                                ? "2px solid #659df2"
                                                : "none",
                                        padding:
                                            page === "Login"
                                                ? "0.2em 1.2em"
                                                : "",
                                        borderRadius: "14px",
                                        transition: "all 0.3s ease",
                                        "&:hover":
                                            page === "Login"
                                                ? {
                                                      backgroundColor:
                                                          "#659df2",
                                                      color: "white",
                                                  }
                                                : {},
                                    }}
                                >
                                    {page}
                                </Button>
                            ))}

                            {/* === DESKTOP: Profile picture dropdown === */}
                            {/* <Tooltip title="Open settings">
                                <IconButton
                                    onClick={handleOpenUserMenu}
                                    sx={{ p: 0 }}
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="/static/images/avatar/2.jpg"
                                    />
                                </IconButton>
                            </Tooltip> */}
                        </Box>
                    </Box>

                    {/* ======================================================================== */}

                    {/* === MOBILE: Profile user menu dropdown === */}
                    {/* <Menu
                        sx={{ mt: "45px" }}
                        id="menu-appbar"
                        anchorEl={anchorElUser}
                        anchorOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "right",
                        }}
                        open={Boolean(anchorElUser)}
                        onClose={handleCloseUserMenu}
                    >
                        {settings.map((setting) => (
                            <MenuItem
                                key={setting}
                                onClick={handleCloseUserMenu}
                            >
                                <Typography textAlign="center">
                                    {setting}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu> */}

                    {/* === MOBILE: Nav menu === */}
                    <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "left",
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: "top",
                            horizontal: "left",
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{ display: { xs: "block", md: "none" } }}
                    >
                        {pages.map((page) => (
                            <MenuItem key={page} onClick={handleCloseNavMenu}>
                                <Typography textAlign="center">
                                    {page}
                                </Typography>
                            </MenuItem>
                        ))}
                    </Menu>
                </Toolbar>
            </Container>
        </AppBar>
    );
};

export default Navbar;
