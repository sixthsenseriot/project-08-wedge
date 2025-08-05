const buttonBase = {
    textTransform: "none",
    fontWeight: "bold",
    mx: 2,
    padding: ".6em 1.6em",
    borderRadius: "10px",
    fontSize: "1em",
    transition: "all 0.3s ease",
};

export const exploreButtonSx = {
    ...buttonBase,
    backgroundColor: "#659df2",
    color: "white",
    "&:hover": {
        backgroundColor: "#4e83d3ff",
    },
};

export const shareButtonSx = {
    ...buttonBase,
    color: "black",
    border: "2px solid #659df2",
    "&:hover": {
        backgroundColor: "#659df263",
    },
};
