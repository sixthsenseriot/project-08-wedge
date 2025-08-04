import * as React from "react";
import Button from "@mui/material/Button";

import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className="HeroSection">
            <h2 className="hero-caption">
                Do more than just get your foot in the door
            </h2>
            <h1 className="hero-header">
                <span className="italic">Wedge </span>
                Your Way In
            </h1>
            <div className="hero-button-container">
                <Button
                    sx={{
                        textTransform: "none",
                        backgroundColor: "#659df2",
                        color: "white",
                        fontWeight: "bold",
                        mx: 2,
                        padding: ".6em 1.6em",
                        borderRadius: "10px",
                        fontSize: "1em",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#4e83d3ff",
                        },
                    }}
                >
                    Explore Experiences
                </Button>
                <Button
                    sx={{
                        textTransform: "none",
                        color: "black",
                        fontWeight: "bold",
                        border: "2px solid #659df2",
                        mx: 2,
                        padding: ".6em 1.6em",
                        borderRadius: "10px",
                        fontSize: "1em",
                        transition: "all 0.3s ease",
                        "&:hover": {
                            backgroundColor: "#659df263",
                        },
                    }}
                >
                    Share Your Story
                </Button>
            </div>
        </div>
    );
};

export default HeroSection;
