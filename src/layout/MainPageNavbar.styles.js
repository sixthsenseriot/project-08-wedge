export const mobileContainerSx = {
    display: { xs: "flex", md: "none" },
    width: "100%",
    alignItems: "center",
};

export const mobileLogoContainerSx = {
    position: "absolute",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    alignItems: "center",
};

export const mobileLogoIconSx = {
    mr: 1,
    color: "#659df2",
};

export const mobileLogoTextSx = {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    letterSpacing: ".05rem",
    color: "inherit",
    textDecoration: "none",
    fontStyle: "italic",
};

export const desktopContainerSx = {
    display: { xs: "none", md: "flex" },
    width: "100%",
    alignItems: "center",
};

export const desktopLogoContainerSx = {
    display: "flex",
    alignItems: "center",
    mr: 2,
};

export const desktopLogoIconSx = {
    mr: 1,
    color: "#659df2",
};

export const desktopLogoTextSx = {
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    letterSpacing: ".05rem",
    color: "inherit",
    textDecoration: "none",
    fontStyle: "italic",
};

export const desktopNavButtonsContainerSx = {
    ml: "auto",
    display: "flex",
    alignItems: "center",
    gap: 2,
};

export const desktopNavButtonsSx = {
    my: 2,
    color: "black",
    display: "block",
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: "14px",
};

export const desktopNavButtonsBaseSx = {
    my: 2,
    color: "black",
    display: "block",
    fontFamily: "Noto Sans",
    fontWeight: "bold",
    textTransform: "none",
    borderRadius: "14px",
};

export const getDesktopNavButtonsSx = (page) => [
    desktopNavButtonsBaseSx,
    {
        border: page === "Login" ? "2px solid #659df2" : "none",
        padding: page === "Login" ? "0.2em 1.2em" : "",
        transition: "all 0.3s ease-in-out",
        "&:hover": page === "Login" ? { backgroundColor: "#659df263" } : {},
    },
];
