import { useNavigate } from "react-router-dom";

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

import {
    mobileContainerSx,
    mobileLogoContainerSx,
    mobileLogoIconSx,
    mobileLogoTextSx,
    desktopContainerSx,
    desktopLogoContainerSx,
    desktopLogoIconSx,
    desktopLogoTextSx,
    desktopNavButtonsContainerSx,
    desktopNavButtonsSx,
    getDesktopNavButtonsSx,
} from "./MainPageNavbar.styles";

const pages = ["Search", "Explore", "Login"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

const MainPageNavbar = () => {
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

    const navigate = useNavigate();

    return (
        <AppBar
            position="static"
            color="black"
            elevation={0}
            className="MainPageNavbar"
        >
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ position: "relative" }}>
                    {/* === MOBILE LAYOUT === */}
                    <Box sx={mobileContainerSx} className="mobile-container">
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
                            sx={mobileLogoContainerSx}
                            className="mobile-logo-container"
                        >
                            <ChangeHistoryIcon sx={mobileLogoIconSx} />
                            <Typography
                                variant="h5"
                                noWrap
                                component="a"
                                href="#app-bar-with-responsive-menu"
                                sx={mobileLogoTextSx}
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
                    <Box sx={desktopContainerSx} className="desktop-container">
                        {/* === DESKTOP: Logo (left) === */}
                        <Box
                            sx={desktopLogoContainerSx}
                            className="desktop-logo-container"
                        >
                            <ChangeHistoryIcon sx={desktopLogoIconSx} />
                            <Typography
                                variant="h6"
                                noWrap
                                component="a"
                                href="/"
                                sx={desktopLogoTextSx}
                            >
                                WEDGE
                            </Typography>
                        </Box>

                        {/* === DESKTOP: Nav buttons and profile picture (right) === */}
                        <Box
                            sx={desktopNavButtonsContainerSx}
                            className="desktop-nav-buttons-container"
                        >
                            {pages.map((page) => {
                                const route =
                                    page === "Login"
                                        ? "/auth"
                                        : `/${page.toLowerCase()}`;
                                return (
                                    <Button
                                        key={page}
                                        onClick={() => {
                                            handleCloseNavMenu();
                                            navigate(route);
                                        }}
                                        sx={getDesktopNavButtonsSx(page)}
                                    >
                                        {page}
                                    </Button>
                                );
                            })}

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
                            <MenuItem
                                key={page}
                                onClick={() => {
                                    handleCloseNavMenu();
                                    navigate(
                                        page === "Login"
                                            ? "/auth"
                                            : `/${page.toLowerCase()}`
                                    );
                                }}
                            >
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

export default MainPageNavbar;
